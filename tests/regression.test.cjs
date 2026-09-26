// Run with: node tests/regression.test.cjs (also supports node --test)
// No dependencies. Tests execute shipped logic in an isolated VM with inert DOM stubs.
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const crypto=require('node:crypto');
const root=path.join(__dirname,'..');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const source=fs.readFileSync(path.join(root,'kb.js'),'utf8')+'\n'+[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n');
function fixture({blocked=false}={}){
  const values=new Map(),elements=new Map();
  const element=id=>{
    if(!elements.has(id))elements.set(id,{id,value:'',innerHTML:'',textContent:'',classList:{toggle(){},add(){},remove(){}},setAttribute(){},removeAttribute(){},querySelector(){return null;},querySelectorAll(){return [];},focus(){},append(){},appendChild(){},replaceChildren(){},addEventListener(){}});
    return elements.get(id);
  };
  const ctx=vm.createContext({URL,TextEncoder,Blob,console,localStorage:{getItem:key=>{if(blocked)throw Error('blocked');return values.get(key)??null;},setItem:(key,value)=>{if(blocked)throw Error('quota');values.set(key,value);},removeItem:key=>values.delete(key)},document:{getElementById:element,querySelectorAll:()=>[],createElement:()=>element(Math.random()),createTextNode:text=>text},window:{scrollTo(){}},confirm:()=>true,setTimeout(){},navigator:{}});
  vm.runInContext("const RealDate=Date; Date=class extends RealDate {constructor(...args){super(...(args.length?args:['2026-09-16T12:00:00Z']));} static now(){return new RealDate('2026-09-16T12:00:00Z').getTime();}}",ctx);
  vm.runInContext(source,ctx);
  const run=expression=>vm.runInContext(expression,ctx);
  const data=expression=>JSON.parse(JSON.stringify(run(expression)));
  return {run,data,values,elements,element};
}
test('wizard preserves a newly selected modification request before rebuilding options',()=>{
 const f=fixture();
 f.run("Object.assign(state,{entityType:'insurer',entityClass:'classE',mode:'EXECUTE',task:'extension',facts:{},focus:[]})");
 f.element('entityType').value='insurer';f.element('entityClass').value='classE';
 f.element('taskType').value='modification';f.run('toStep(3)');
 assert.equal(f.run('state.task'),'modification');
 assert.ok(!f.run('relevantFacts()').includes('filingType'));
 f.run('renderResults(true)');assert.match(f.element('results').innerHTML,/Task: Exemption \/ modification request/);
 assert.ok(!f.element('results').innerHTML.includes('Filing selection:'));
});

test('all 162 shipped entries pass the import schema',()=>{
  const f=fixture();assert.equal(f.run('KB.entries.length'),162);assert.deepEqual(f.data('validateFragment(JSON.stringify(KB.entries)).errors'),[]);
});
test('the 161 original entries match their pinned, owner-approved fingerprints',()=>{
  // 2.4.0 baseline was 2694e7586ca47be93b620c045e1f6774355ab915bcfade97ee00a15cbab3dab9. On 25 September 2026 the owner approved
  // (SBA decision T3) corrections to focus-cap-4 and conseq-sba-unapproved only; the other 159 original entries stay pinned separately.
  const f=fixture();
  const hash=list=>crypto.createHash('sha256').update(JSON.stringify(list)).digest('hex');
  const original=f.data("KB.entries.filter(e=>e.id!=='rec-bill-insurance-als-2026')");
  assert.equal(original.length,161);
  assert.equal(hash(original.filter(e=>!['focus-cap-4','conseq-sba-unapproved'].includes(e.id))),'452483c41ef2510f9f5237f83554488e853e3977ef9f95b0a4a0f62e2d49175d');
  assert.equal(hash(original),'ff0751259c7130f52e9eaf651a32d085d27e7b57ec411471a5299802af0ee0a0');
});
test('owner-approved SBA entry corrections cite Schedule XXVI and drop the non-long-term scope',()=>{
  const f=fixture();
  const focus=f.data("KB.entries.find(e=>e.id==='focus-cap-4')"),conseq=f.data("KB.entries.find(e=>e.id==='conseq-sba-unapproved')");
  assert.equal(focus.verification,'established');assert.match(focus.citation,/Sch\. XXVI paras 28–30/);assert.match(focus.text,/distinct from an internal capital model/);
  assert.deepEqual(conseq.entity_scope,['classC','classD','classE']);assert.equal(conseq.verification,'verify');assert.match(conseq.data.rows[0].provision,/para/);
  for(const e of [focus,conseq])assert.equal(e.source.type,'bma-primary');
  assert.deepEqual(f.data('validateFragment(JSON.stringify(KB.entries)).errors'),[]);
});
test('pilot profiles have source-backed claims and primary support for legal cells',()=>{
  const f=fixture();
  assert.equal(f.run('KB.version'),'2.9.0');assert.equal(f.run('KB.app_version'),'2.9.0');
  const errors=f.data(`(()=>{const errors=[],sources=KB.class_profile_sources,claim=(c,legal=false)=>{
    if(!c||typeof c.text!=='string'||!c.text||!Array.isArray(c.sources)||!c.sources.length||!c.pin)errors.push('incomplete claim');
    else for(const id of c.sources){const s=sources[id];if(!s||!s.url||!s.retrieved||![1,2,3,4].includes(s.tier))errors.push('source '+id);}
    if(legal&&!c.sources.some(id=>['law','rule'].includes(sources[id]?.kind)))errors.push('legal claim without primary source');
  };
  for(const [id,p] of Object.entries(KB.class_profiles)){
    if(!Object.hasOwn(KB.insurerClasses,id)||p.legal_review!=='pending')errors.push('invalid profile '+id);
    for(const key of ['at_a_glance','official_rationale','industry_view','qualification','footprint','misconceptions'])for(const c of p[key])claim(c,key==='qualification');
    for(const c of p.timeline)claim(c);
  }
  for(const row of KB.class_profile_comparison.rows)for(const id of KB.class_profile_comparison.classes)claim(row.cells[id],row.legal);
  for(const c of KB.class_profile_comparison.class3a_context)claim(c);
  return errors;})()`);
  assert.deepEqual(errors,[]);
});
test('pilot profiles stay in overview, show the approved SPI audit wording without a pending-review sign, and escape data',()=>{
  const f=fixture();
  f.run("Object.assign(state,{entityType:'insurer',entityClass:'spi',mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)");
  let result=f.element('results').innerHTML;
  assert.match(result,/Class background \(context, not requirements\)/);
  assert.match(result,/Restricted SPI: GAAP financial statements included in the Statutory Financial Return are unaudited under SPI Rules 2020, r\.7\(3\)\(b\)/);
  assert.match(result,/Confirm the interaction and any case-specific modification with Bermuda counsel or the BMA/);
  assert.ok(!result.includes('pending legal review'));
  assert.match(result,/Confirm applicability with the BMA and your advisers/);
  assert.match(result,/Conflicting sources/);
  assert.match(result,/Class 3A context, not an alternative route/);assert.match(result,/retrieved 2026-09-24/);
  assert.match(result,/rel="noopener noreferrer"/);
  f.run("state.mode='DISTIL';renderResults(true)");result=f.element('results').innerHTML;
  assert.ok(!result.includes('Restricted SPI: GAAP financial statements'));assert.match(result,/Class background is available in the regulatory landscape overview/);
  f.run("state.mode='EXECUTE';renderResults(true)");result=f.element('results').innerHTML;
  assert.ok(!result.includes('Restricted SPI: GAAP financial statements'));assert.match(result,/Class background is available in the regulatory landscape overview/);
  f.run("KB.class_profiles.spi.at_a_glance[0].text='<img src=x onerror=alert(1)>';KB.class_profiles.spi.at_a_glance[0].pin='<svg onload=alert(1)>';state.mode='MAP';renderResults(true)");
  result=f.element('results').innerHTML;assert.match(result,/&lt;img/);assert.match(result,/&lt;svg/);assert.ok(!result.includes('<img'));assert.ok(!result.includes('<svg'));
});
test('Class E background separates the Act and BMA descriptions without deciding a registration class',()=>{
  const f=fixture();
  f.run("Object.assign(state,{entityType:'insurer',entityClass:'classE',mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)");
  let result=f.element('results').innerHTML;
  assert.match(result,/Class background \(context, not requirements\)/);
  assert.match(result,/section 4EF/);
  assert.match(result,/registrable as Class C, D or E/);
  assert.match(result,/The BMA&#39;s licensing summary and 2025 Annual Report describe E more simply/);
  assert.match(result,/The BMA determines an insurer&#39;s registration class/);
  assert.ok(!result.includes('exactly $500 million'));
  assert.match(result,/Conflicting sources/);
  f.run("state.mode='DISTIL';renderResults(true)");result=f.element('results').innerHTML;
  assert.ok(!result.includes('The BMA&#39;s licensing summary and 2025 Annual Report describe E more simply'));
});
test('non-insurer selections show sector coverage limits without cross-sector inference',()=>{
  const f=fixture();
  f.run("Object.assign(state,{entityType:'msb',entityClass:'',mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)");
  let result=f.element('results').innerHTML;
  assert.match(result,/Money service business background/);
  assert.match(result,/general public/);
  assert.match(result,/owner\/legal-resolved/);
  assert.match(result,/At a glance/);
  assert.match(result,/Limits of current information/);
  f.run("Object.assign(state,{entityType:'bank',entityClass:'',mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)");
  result=f.element('results').innerHTML;
  assert.match(result,/Banking and deposit-taking background/);
  assert.match(result,/restricted-banking licences/);
  assert.match(result,/At a glance/);
  assert.ok(!result.includes('Illustrative content — pending legal review'));
});
test('every selectable class and entity type has an overview background section',()=>{
  const f=fixture();
  const insurerIds=f.data('Object.keys(KB.insurerClasses)');
  for(const id of insurerIds){
    f.run(`Object.assign(state,{entityType:'insurer',entityClass:${JSON.stringify(id)},mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)`);
    assert.match(f.element('results').innerHTML,/id="classBackground"/,id);
  }
  const nonInsurerIds=f.data('KB.scopeGroups.nonInsurers');
  for(const id of nonInsurerIds){
    if(id==='daba'){
      for(const licence of f.data('Object.keys(KB.dabaClasses)')){
        f.run(`Object.assign(state,{entityType:'daba',entityClass:${JSON.stringify(licence)},mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)`);
        assert.match(f.element('results').innerHTML,/id="entityBackground"/,`daba/${licence}`);
      }
    } else {
      f.run(`Object.assign(state,{entityType:${JSON.stringify(id)},entityClass:'',mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)`);
      assert.match(f.element('results').innerHTML,/id="entityBackground"/,id);
    }
  }
});
test('all shipped context claims retain source metadata and citation pins',()=>{
  const f=fixture();
  const errors=f.data(`(()=>{const errors=[],sources=KB.class_profile_sources;const check=(label,c)=>{if(!c||typeof c.text!=='string'||!c.text||!c.pin||!Array.isArray(c.sources)||!c.sources.length)errors.push(label+' incomplete');else for(const id of c.sources){const s=sources[id];if(!s||!s.url||!s.retrieved||![1,2,3,4].includes(s.tier))errors.push(label+' source '+id);}};for(const [id,p] of Object.entries(KB.class_profile_context||{})){if(Array.isArray(p.claims))p.claims.forEach((c,i)=>check(id+'.'+i,c));}for(const [id,p] of Object.entries(KB.entity_profile_context||{})){if(Array.isArray(p.claims))p.claims.forEach((c,i)=>check(id+'.'+i,c));else for(const [sub,q] of Object.entries(p||{}))if(Array.isArray(q.claims))q.claims.forEach((c,i)=>check(id+'.'+sub+'.'+i,c));}return errors;})()`);
  assert.deepEqual(errors,[]);
});
test('expanded insurer backgrounds cover every non-pilot class with primary-law qualification and source-backed context',()=>{
  const f=fixture();
  const errors=f.data(`(()=>{const errors=[],sources=KB.class_profile_sources,ids=Object.keys(KB.insurerClasses).filter(id=>!KB.class_profiles[id]);const claim=(c,label,legal)=>{if(!c?.text||!c.pin||!Array.isArray(c.sources)||!c.sources.length){errors.push(label+' incomplete');return;}for(const sid of c.sources){const s=sources[sid];if(!s||!s.url||!s.retrieved||![1,2,3,4].includes(s.tier))errors.push(label+' source '+sid);}if(legal&&!c.sources.some(sid=>sources[sid]?.kind==='law'))errors.push(label+' without law');};for(const c of KB.class_profile_shared_history||[])claim(c,'shared history',false);for(const id of ids){const p=KB.class_profile_details[id];if(!p){errors.push(id+' missing');continue;}for(const key of ['glance','history','purpose','qualification','distinctions','footprint'])if(!Array.isArray(p[key])||!p[key].length)errors.push(id+' '+key+' missing');for(const [key,claims] of Object.entries(p)){if(key==='meta'||key==='subcategories')continue;if(key==='developments'){if(!Array.isArray(claims)||!claims.length||claims.some(x=>!KB.entries.some(e=>e.id===x)))errors.push(id+' developments invalid');continue;}for(const c of claims)claim(c,id+' '+key,key==='qualification');}}return errors;})()`);
  assert.deepEqual(errors,[]);
  for(const id of ['class1','class2','class3','class3a','class3b','class4','classA','classB','classC','classD','classE','iigb']){
    f.run(`Object.assign(state,{entityType:'insurer',entityClass:${JSON.stringify(id)},mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)`);
    const result=f.element('results').innerHTML;
    for(const heading of ['Origin and history','Shared class-system timeline','Why the class exists','What qualifies an entity','How it differs from neighbouring classes','Market footprint','Sources for this profile'])assert.ok(result.includes(heading),id+' '+heading);
    f.run("state.mode='DISTIL';renderResults(true)");assert.ok(!f.element('results').innerHTML.includes('Origin and history'),id+' obligations leakage');
    assert.match(f.element('results').innerHTML,/Class background is available in the regulatory landscape overview/);
  }
  f.run("KB.class_profile_details.class1.history[0].text='<img src=x onerror=alert(1)>';state.entityClass='class1';state.mode='MAP';renderResults(true)");
  assert.match(f.element('results').innerHTML,/&lt;img/);assert.ok(!f.element('results').innerHTML.includes('<img'));
  assert.equal(f.run("(()=>{const a=JSON.parse(JSON.stringify(activeKB())),b=JSON.parse(JSON.stringify(a));b.class_profile_details.class1.history[0].text+=' changed';return kbFingerprint(a)===kbFingerprint(b)})()"),false);
});
test('IIGB footprint discloses both BMA 2025 figures without claiming a live count',()=>{
  const f=fixture();
  const claims=f.data('KB.class_profile_details.iigb.footprint');
  assert.equal(claims.length,1);
  assert.deepEqual(claims[0].sources,['bma_2025']);
  assert.match(claims[0].pin,/pp\.38, 66/);
  assert.match(claims[0].text,/eight IIGB licences/);
  assert.match(claims[0].text,/seven fully licensed IIGB entities/);
  assert.match(claims[0].text,/report does not reconcile the figures/);
  assert.match(claims[0].text,/Possible mechanisms in general, not BMA findings/);
  assert.match(claims[0].text,/run-off treatment, different data-compilation cutoffs, or active-business versus registered-entity counts/);
  assert.doesNotMatch(claims[0].text,/publication lag/);
  assert.match(claims[0].text,/Neither figure is a live register count/);
  f.run("Object.assign(state,{entityType:'insurer',entityClass:'iigb',mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)");
  const overview=f.element('results').innerHTML;
  assert.match(overview,/Market footprint/);
  assert.match(overview,/seven fully licensed IIGB entities/);
  assert.match(overview,/pp\.38, 66/);
  assert.match(overview,/BMA Annual Report 2025/);
  f.run("state.mode='DISTIL';renderResults(true)");
  assert.ok(!f.element('results').innerHTML.includes('seven fully licensed IIGB entities'));
  f.run("state.mode='EXECUTE';state.task='newlicence';renderResults(true)");
  assert.ok(!f.element('results').innerHTML.includes('seven fully licensed IIGB entities'));
});
test('the shared timeline is shown once per overview and is protected by fingerprint and import boundaries',()=>{
  const f=fixture();
  f.run("Object.assign(state,{entityType:'insurer',entityClass:'class3b',mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)");
  const html=f.element('results').innerHTML;
  assert.equal((html.match(/Shared class-system timeline/g)||[]).length,1);
  assert.match(html,/29 April 1995/);assert.match(html,/5 August 2019/);
  assert.equal(f.run("(()=>{const a=JSON.parse(JSON.stringify(activeKB())),b=JSON.parse(JSON.stringify(a));b.class_profile_shared_history[0].text+=' changed';return kbFingerprint(a)===kbFingerprint(b)})()"),false);
  assert.equal(f.run("validateFragment(JSON.stringify({entries:[],class_profile_shared_history:KB.class_profile_shared_history})).ok"),false);
  f.run("state.mode='EXECUTE';state.task='newlicence';renderResults(true)");
  assert.ok(!f.element('results').innerHTML.includes('Shared class-system timeline'));
});
test('the 2026 ALS Bill stays a sourced proposal in the C/D/E overview horizon only',()=>{
  const f=fixture();
  const proposal=f.data("KB.entries.find(e=>e.id==='rec-bill-insurance-als-2026')");
  assert.deepEqual(proposal.entity_scope,['classC','classD','classE']);
  assert.equal(proposal.topic,'framework');
  assert.equal(proposal.data.role,'recent');
  assert.match(proposal.text,/proposes a new Insurance Act section 17AA/);
  assert.match(proposal.text,/not treated here as an operative requirement/);
  assert.equal(proposal.source.type,'legislation');
  assert.match(proposal.source.url,/^https:\/\/parliament\.bm\/admin\/uploads\/bill\//);
  assert.equal(proposal.rule,undefined);
  for(const id of ['classC','classD','classE']){
    assert.ok(f.data(`KB.class_profile_details.${id}.developments`).includes(proposal.id));
    f.run(`Object.assign(state,{entityType:'insurer',entityClass:'${id}',mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)`);
    const overview=f.element('results').innerHTML;
    assert.match(overview,/Proposed Insurance Act asset-and-liability-statement amendment/);
    assert.match(overview,/Proposal only/);
    assert.match(overview,/not treated here as an operative requirement/);
    f.run("state.mode='DISTIL';renderResults(true)");
    assert.ok(!f.element('results').innerHTML.includes('rec-bill-insurance-als-2026'));
    assert.ok(!f.element('results').innerHTML.includes('proposes a new Insurance Act section 17AA'));
    f.run("state.mode='EXECUTE';state.task='newlicence';renderResults(true)");
    assert.ok(!f.element('results').innerHTML.includes('proposes a new Insurance Act section 17AA'));
  }
  f.run("Object.assign(state,{entityType:'insurer',entityClass:'class3b',mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)");
  assert.ok(!f.element('results').innerHTML.includes('proposes a new Insurance Act section 17AA'));
});
test('dated market observations and combined studies are not presented as single-class legal requirements',()=>{
  const f=fixture();
  for(const [id,phrase] of [['class1','51% of Class 1 short-tail gross written premium'],['class2','39% of Class 2 short-tail gross written premium'],['class3','89% of SAC/ISAC premium'],['classA','73% of Class A assets'],['classB','65% of Class B assets'],['class3b','Classes 3B and 4 together'],['class4','Classes 3B and 4 together'],['classC','Classes C, D and E together'],['classD','Classes C, D and E together'],['classE','Classes C, D and E together']]){
    f.run(`Object.assign(state,{entityType:'insurer',entityClass:${JSON.stringify(id)},mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)`);
    assert.ok(f.element('results').innerHTML.includes(phrase),id);
  }
  f.run("Object.assign(state,{entityType:'insurer',entityClass:'classC',mode:'DISTIL',task:'',focus:[],facts:{}});renderResults(true)");
  assert.ok(!f.element('results').innerHTML.includes('Classes C, D and E together'));
});
test('expanded profiles escape claims and cite the Class E conflict as attributed descriptions',()=>{
  const f=fixture();
  f.run("KB.class_profile_details.classE.distinctions[0].text='<svg onload=alert(1)>';KB.class_profile_details.classE.distinctions[0].pin='<img src=x>';Object.assign(state,{entityType:'insurer',entityClass:'classE',mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)");
  const html=f.element('results').innerHTML;
  assert.match(html,/&lt;svg/);assert.match(html,/&lt;img/);
  assert.ok(!html.includes('<svg'));assert.ok(!html.includes('<img'));
  assert.match(html,/Official commentary/);assert.match(html,/BMA guidance/);assert.match(html,/Conflicting sources/);
});
test('profile review date and local profile imports remain visibly pending',()=>{
  const f=fixture();
  f.run("KB.class_profiles.spi.researched_on='2025-01-01';KB.class_profiles.spi.review_due='2026-01-01';Object.assign(state,{entityType:'insurer',entityClass:'spi',mode:'MAP',task:'',focus:[],facts:{}});renderResults(true)");
  assert.match(f.element('results').innerHTML,/Review overdue/);
  const raw=f.run("JSON.stringify({entries:[],class_profiles:{spi:{...KB.class_profiles.spi,legal_review:'reviewed',at_a_glance:[{text:'Local statement',sources:['act'],pin:'s.1'}]}}})");
  assert.equal(f.run(`validateFragment(${JSON.stringify(raw)}).ok`),true);
  f.values.set('bcn_kb_overlay_v2',f.run(`JSON.stringify({...${raw},schema_version:2,base_version:KB.version,base_fingerprint:kbFingerprint(KB),merges:1,version:'2.5.0+local.1',modified_at:'2026-09-24'})`));
  assert.equal(f.run('activeKB().class_profiles.spi.legal_review'),'pending');
  f.run('renderResults(true)');assert.match(f.element('results').innerHTML,/Local imported profile — user-supplied and unendorsed/);
});
test('profile-only import previews and merges, while malformed or unsupported profiles are rejected',()=>{
  const f=fixture();
  const raw=f.run("JSON.stringify({entries:[],class_profiles:{spi:{...KB.class_profiles.spi,legal_review:'reviewed',at_a_glance:[{text:'Imported context',sources:['act'],pin:'s.1'}]}}})");
  f.element('kbFragment').value=raw;f.run('previewFragment()');
  assert.match(f.element('kbDiff').innerHTML,/spi profile — changed/);
  f.run('mergeFragment()');
  assert.equal(f.run('activeKB().class_profiles.spi.legal_review'),'pending');
  assert.equal(f.run('activeKB().class_profiles.spi.imported'),true);
  for(const change of ["p.at_a_glance[0].sources=['unknown']","p.qualification[0].sources=['conyers']","p.timeline=[{date:'2026',text:'x',sources:[]}]","p.review_due='2020-01-01'"]){
    const ok=f.run(`(()=>{const p=JSON.parse(JSON.stringify(KB.class_profiles.spi));${change};return validateFragment(JSON.stringify({entries:[],class_profiles:{spi:p}})).ok})()`);
    assert.equal(ok,false,change);
  }
  assert.equal(f.run("validateFragment(JSON.stringify({entries:[],class_profiles:{classE:KB.class_profiles.spi}})).ok"),false);
});
test('malformed root, fields, impossible dates, unsafe URLs and duplicate IDs are rejected',()=>{
  const f=fixture();
  for(const raw of ['null','true','1','{}','[]','{"entries":[null]}'])assert.equal(f.run(`validateFragment(${JSON.stringify(raw)}).ok`),false,raw);
  for(const change of ["e.data=undefined","e.source={}","e.last_reviewed='2026-99-99'","e.review_due='2020-01-01'","e.entity_scope=['unknown']","e.verification='toString'","e.source.url='javascript:alert(1)'","e.source.url='https://user:secret@example.org'","e.data.months='4'","e.id=\"a' onclick='x\""]){
    assert.equal(f.run(`(()=>{const e=JSON.parse(JSON.stringify(KB.entries.find(e=>e.topic==='filing')));${change};return validateFragment(JSON.stringify([e])).ok})()`),false,change);
  }
  assert.equal(f.run('validateFragment(JSON.stringify([KB.entries[0],KB.entries[0]])).ok'),false);
  assert.equal(f.run('validateFragment(JSON.stringify({...KB.entries[0],__proto__:null})).ok'),false);
});
test('nested task and consequence structures are validated',()=>{
  const f=fixture();
  for(const [topic,change] of [['task','e.data.fee=null'],['task','e.data.docs=[{}]'],['consequence',"e.data.rows=[{breach:'x',consequence:'x',provision:'x',ver:'invented'}]"]]){
    assert.equal(f.run(`(()=>{const e=JSON.parse(JSON.stringify(KB.entries.find(e=>e.topic==='${topic}'&&!e.data.role)));${change};return validateFragment(JSON.stringify([e])).ok})()`),false);
  }
});
test('rendered untrusted text is escaped in summaries, headings, bodies and sources',()=>{
  const f=fixture();
  f.run("Object.assign(state,{entityType:'insurer',entityClass:'classE',fye:'2025-12-31',mode:'MAP',task:'',focus:[]})");
  const raw=f.run(`JSON.stringify({entries:[{...KB.entries.find(e=>e.id==='summary-commercial'),text:'<img src=x onerror="alert(1)">',data:{role:'summary'}},{...KB.entries.find(e=>e.id==='fw-insurance-act'),text:'<svg onload="alert(1)">',data:{name:'<img src=x onerror="alert(1)">'},source:{type:'legislation',name:'<script>example</script>',url:'https://example.org/?q="x"'}}]})`);
  f.values.set('bcn_kb_overlay_v2',f.run(`JSON.stringify({...${raw},schema_version:2,base_version:KB.version,base_fingerprint:kbFingerprint(KB)})`));f.run('renderResults(true)');
  const result=f.element('results').innerHTML;
  assert.ok(result.includes('&lt;img'));assert.ok(!result.includes('<img'));assert.ok(!result.includes('<svg'));assert.ok(!result.includes('<script>'));
});
test('all supported entity classes render all three modes without exceptions',()=>{
  const f=fixture();
  const result=f.run(`(()=>{let count=0;for(const type of ['insurer',...KB.scopeGroups.nonInsurers]){for(const cls of type==='insurer'?Object.keys(KB.insurerClasses):type==='daba'?Object.keys(KB.dabaClasses):['']){for(const mode of ['MAP','DISTIL','EXECUTE']){Object.assign(state,{entityType:type,entityClass:cls,fye:'2025-12-31',mode,task:'newlicence',focus:KB.focusAreas.map(a=>a[0])});renderResults(true);count++;}}}return count;})()`);
  assert.ok(result>=60);
});
test('each guidance mode has a distinct information architecture',()=>{
 const f=fixture();
 f.run("Object.assign(state,{entityType:'insurer',entityClass:'classE',fye:'2025-12-31',mode:'MAP',task:'',focus:['capital'],facts:{}});renderResults(true)");
 let result=f.element('results').innerHTML;
 assert.match(result,/Legislative & Regulatory Framework/);assert.match(result,/Selected Changes &amp; Pending Items/);assert.match(result,/Focus-Area Analysis/);
 assert.ok(!result.includes('Filing & Reporting Calendar'));assert.ok(!result.includes('Governance & Board Expectations'));
 f.run("Object.assign(state,{entityType:'insurer',entityClass:'classE',fye:'2025-12-31',mode:'DISTIL',task:'',focus:['capital'],facts:{}});renderResults(true)");
 result=f.element('results').innerHTML;
 assert.match(result,/Filing & Reporting Calendar/);assert.match(result,/Governance & Board Expectations/);assert.match(result,/Use Regulatory landscape overview to inspect the detailed governing instruments/);
 assert.ok(!result.includes('Legislative & Regulatory Framework'));assert.ok(!result.includes('Selected Changes &amp; Pending Items'));assert.ok(!result.includes('Focus-Area Analysis'));
 f.run("renderResults();openJourney('MAP')");
 assert.equal(f.run('state.mode'),'MAP');assert.deepEqual(f.data('state.focus'),['capital']);
 assert.equal(f.run('state.entityClass'),'classE');assert.equal(f.run('state.fye'),'2025-12-31');
 f.run("openJourney('EXECUTE');state.task='modification';renderResults(true)");
 result=f.element('results').innerHTML;
 assert.match(result,/Draft Correspondence Template/);assert.ok(!result.includes('Focus-Area Analysis'));assert.ok(!result.includes('Filing & Reporting Calendar'));
});
test('non-insurers have no insurer application tasks or fees',()=>{
  const f=fixture();
  for(const type of f.data('KB.scopeGroups.nonInsurers')){
    f.run(`Object.assign(state,{entityType:'${type}',entityClass:'${type==='daba'?'classF':''}',fye:'',mode:'EXECUTE',task:'newlicence',focus:[]})`);
    assert.equal(f.run("scoped('task').length"),0);f.run('renderResults(true)');
    const result=f.element('results').innerHTML;assert.ok(result.includes('Application guidance unavailable'));assert.ok(!result.includes('application fee $800'));
  }
});
test('date arithmetic clamps month ends and refuses invalid dates',()=>{
  const f=fixture();
  for(const [date,months,expected] of [['2025-12-31',4,'20260430'],['2025-08-31',6,'20260228'],['2024-02-29',4,'20240629'],['2025-10-31',4,'20260228']])assert.equal(f.run(`icsDate(addMonthsDate('${date}',${months}))`),expected);
  assert.equal(f.run("addMonthsDate('2025-02-30',4)"),null);
});
test('conditional ALS and unverified dates never export automatically',()=>{
  const f=fixture();f.run("Object.assign(state,{entityType:'insurer',entityClass:'classE',fye:'2025-12-31',mode:'DISTIL',task:'',focus:[]})");
  assert.equal(f.run("deadlineFor(KB.entries.find(e=>e.id==='filing-als-cde')).date"),null);
  assert.equal(f.run("calendarPlan().filter(x=>x.date).length"),2);
  assert.ok(!f.run('buildIcs()').includes('filing-als-cde'));
  assert.equal(f.run("deadlineFor({...KB.entries.find(e=>e.id==='filing-sfs-sfr-4m'),review_due:'2020-01-01'}).date"),null);
});
test('calendar uses CRLF, unique class UIDs, two alarms and UTF-8 byte folding',()=>{
  const f=fixture();f.run("Object.assign(state,{entityType:'insurer',entityClass:'classE',fye:'2025-12-31'})");
  const text=f.run('buildIcs()');assert.equal(f.run('validateIcs(buildIcs()).ok'),true);
  assert.ok(text.split('\r\n').every(line=>Buffer.byteLength(line,'utf8')<=75));
  const folded=f.run("icsFold('DESCRIPTION:'+('é😀'.repeat(100)))");
  assert.ok(folded.split('\r\n').every(line=>Buffer.byteLength(line,'utf8')<=75));
  assert.equal(folded.replace(/\r\n /g,''),'DESCRIPTION:'+'é😀'.repeat(100));
  const uidE=text.match(/UID:([^\r]+)/)[1];f.run("state.entityClass='classD'");assert.notEqual(f.run('buildIcs()').match(/UID:([^\r]+)/)[1],uidE);
  assert.equal((text.match(/BEGIN:VALARM/g)||[]).length,4);
});
test('storage failure and corrupted overlays do not break static reports',()=>{
  const f=fixture({blocked:true});f.run("Object.assign(state,{entityType:'insurer',entityClass:'class1',fye:'2025-12-31',mode:'DISTIL',task:'',focus:[]});renderResults(true)");
  assert.ok(f.element('results').innerHTML.includes('Class 1'));assert.ok(f.run('storageMessage').includes('unavailable'));
  const g=fixture();g.values.set('bcn_kb_overlay_v2','{"entries":[null]}');assert.equal(g.run('activeKB().entries.length'),162);assert.ok(g.run('storageMessage').includes('invalid'));
});
test('malformed saved data is ignored and not overwritten by save',()=>{
  const f=fixture();f.values.set('bcn_assessments','{}');f.run("Object.assign(state,{entityType:'insurer',entityClass:'class1',fye:'',mode:'MAP',task:'',focus:[]});renderResults(true);confirmSaveAssessment()");assert.equal(f.values.get('bcn_assessments'),'{}');
});
test('bookmark fingerprint catches content change with an unchanged version',()=>{
  const f=fixture();assert.equal(f.run("(()=>{const a=JSON.parse(JSON.stringify(activeKB())),b=JSON.parse(JSON.stringify(a));b.entries[0].text+=' Updated.';return kbFingerprint(a)===kbFingerprint(b)})()"),false);
  assert.equal(f.run("(()=>{const a=JSON.parse(JSON.stringify(activeKB())),b=JSON.parse(JSON.stringify(a));b.entity_profile_context.msb.claims[0].text+=' Updated.';return kbFingerprint(a)===kbFingerprint(b)})()"),false);
});
test('new resets inputs; reopen synchronizes focus checkboxes through syncForm',()=>{
  const f=fixture();f.run("Object.assign(state,{entityType:'insurer',entityClass:'classE',fye:'2025-12-31',mode:'MAP',task:'extension',focus:['capital']});startWizard()");assert.deepEqual(f.data('state'),{entityType:'',entityClass:'',fye:'',mode:'',task:'',focus:[],facts:{}});
});
test('changed input after preview cannot merge an old fragment',()=>{
  const f=fixture();f.element('kbFragment').value=f.run('JSON.stringify([KB.entries[0]])');f.run('previewFragment()');f.element('kbFragment').value='null';f.run('mergeFragment()');assert.equal(f.values.has('bcn_kb_overlay_v2'),false);assert.equal(f.run('pendingFragment'),null);
});
test('merge preserves original research date and records the shipped baseline',()=>{
  const f=fixture();f.element('kbFragment').value=f.run("JSON.stringify({version:'same-version',entries:[{...KB.entries[0],text:'Edited locally.'}]})");f.run('previewFragment();mergeFragment()');assert.equal(f.run('activeKB().as_at'),'2026-07-02');assert.equal(f.run('activeKB().version'),'same-version');
});
test('public app has no API request, password prompt, remote scripts or embedded LLM prompt',()=>{
  assert.ok(!html.includes('fetch('));assert.ok(!html.includes('api.anthropic.com'));assert.ok(!html.includes('type="password"'));assert.ok(!html.includes('MASTER_PROMPT_TEXT'));assert.ok(!/<script[^>]+src="https?:/.test(html));
});

const expected=JSON.parse(fs.readFileSync(path.join(__dirname,'accuracy-cases.json'),'utf8'));
function profile(f,entityClass='classE',facts={},mode='DISTIL',task=''){
  f.run(`Object.assign(state,${JSON.stringify({entityType:'insurer',entityClass,facts,mode,task,fye:'2025-12-31',focus:[]})})`);
}
test('Op Res scope follows the primary class/licence matrix',()=>{
 const f=fixture();
 for(const cls of [...expected.opres.includedInsurers,...expected.opres.excludedInsurers]){
  profile(f,cls);assert.equal(f.run("scoped('framework').some(e=>e.id==='fw-opres-code')"),expected.opres.includedInsurers.includes(cls),cls);
  assert.equal(f.run("scoped('focus').some(e=>e.id==='focus-out-3')"),true,'Current Act route retained for '+cls);
 }
 for(const cls of ['classF','classM','classT']){
  f.run(`Object.assign(state,{entityType:'daba',entityClass:'${cls}'})`);
  assert.equal(f.run("scoped('framework').some(e=>e.id==='rec-opres')"),cls==='classF');
 }
 f.run("Object.assign(state,{entityType:'investment',entityClass:'',facts:{investmentLicence:'unknown'}})");
 assert.match(f.run("scoped('framework').find(e=>e.id==='fw-opres-code').text"),/CONDITIONAL/);
 f.run("state.facts.investmentLicence='other'");assert.equal(f.run("scoped('framework').some(e=>e.id==='fw-opres-code')"),false);
 f.run("Object.assign(state,{entityType:'bank',facts:{}})");assert.equal(f.run("scoped('framework').find(e=>e.id==='fw-opres-code').compliance_by"),expected.opres.bankCompliance);
});
test('dividend and capital rows are filtered by legal class scope',()=>{
 const f=fixture();
 for(const cls of [...expected.dividends.affidavitIncluded,...expected.dividends.affidavitExcluded]){
  profile(f,cls);const rows=f.data("scoped('consequence').find(e=>e.id==='conseq-dividends').data.rows");
  assert.equal(rows.some(r=>r.provision.startsWith('s.31B(1)')),expected.dividends.affidavitIncluded.includes(cls),cls);
  assert.equal(rows.some(r=>r.provision==='s.31C(5)'),cls==='collateralized');
  if(cls==='collateralized')assert.ok(!rows.some(r=>r.provision.startsWith('s.31C(1)')));
 }
});
test('extension fees depend on filing type, class and supported fee year',()=>{
 const f=fixture();
 for(const c of expected.extensionFees){profile(f,c.class,{filingType:c.filing},'EXECUTE','extension');const t=f.run("scoped('task').find(e=>e.id==='task-extension').data.fee.t");assert.ok(t.includes(c.fee)&&t.includes(c.item),t);}
 profile(f,'classE',{filingType:'combined'},'EXECUTE','extension');assert.ok(!f.run('extensionFee().t').includes('$'));
 profile(f,'class1',{filingType:'bscr'},'EXECUTE','extension');assert.equal(f.run('extensionFee().ver'),'unverified');
 profile(f,'classE',{filingType:'statutory',applicationDate:'2027-01-01'},'EXECUTE','extension');assert.ok(!f.run('extensionFee().t').includes('$'));
});
test('PCC has effective-date, RFI, Key Person and full-receipt conditions in new licensing',()=>{
 const f=fixture();const facts={amlRfi:'yes',keyVetting:'yes',completeBefore:'no',applicationDate:'2026-10-01'};
 profile(f,'classE',facts,'EXECUTE','newlicence');f.run('renderResults(true)');assert.match(f.element('results').innerHTML,/Applicable on the selected facts/);assert.match(f.element('results').innerHTML,/Police Clearance Certificate/);
 f.run("state.facts.applicationDate='2026-09-30'");assert.match(f.run('pccStatus()'),/Upcoming/);
 f.run("state.facts.applicationDate='2026-10-01';state.facts.completeBefore='yes'");assert.match(f.run('pccStatus()'),/Transitional exception/);
 f.run("state.facts.amlRfi='no'");assert.match(f.run('pccStatus()'),/do not activate/);
 profile(f,'classE',{applicationDate:'2026-10-01'},'EXECUTE','approvedperson');assert.match(f.run('pccStatus()'),/Conditional/);
});
test('controller route respects public/private shares, disposal class and insurer reporting',()=>{
 const f=fixture();profile(f,'classE',{shares:'private'});assert.match(f.run('controllerContext()'),/disposal: prior written notice/);
 f.run("state.facts.shares='public'");assert.match(f.run('controllerContext()'),/disposal: written notice within 45 days after/);
 profile(f,'class1',{shares:'private'});assert.match(f.run('controllerContext()'),/not in the section 30EA/);assert.match(f.run('controllerContext()'),/30J\(4\) annual/);
 for(const id of ['focus-gov-3','task-controller'])assert.ok(!f.run(`KB.entries.find(e=>e.id==='${id}').citation`).includes('30CA'));
});
test('consultations and domestic-retail conduct scope preserve section boundaries',()=>{
 const f=fixture();const text=f.run("KB.entries.find(e=>e.id==='rec-cp-code-group-2026').text");assert.match(text,/section 1/);assert.match(text,/section 3 paragraph 8/);assert.match(text,/180 days/);
 profile(f,'classE',{domestic:'no'});const conduct=f.run("scoped('framework').find(e=>e.id==='fw-code-conduct').text");assert.match(conduct,/8.1/);assert.ok(!conduct.includes('Part 8 currently applies only'));
});
test('ALS and recovery unknown facts stay conditional, exclusions suppress scoped rows',()=>{
 const f=fixture();profile(f);assert.match(f.run("scoped('governance').find(e=>e.id==='gov-recovery-plan').text"),/CONDITIONAL/);
 profile(f,'classE',{domestic:'yes',recovery:'no'});assert.ok(!f.run("scoped('filing').some(e=>e.id==='filing-als-cde')"));assert.ok(!f.run("scoped('governance').some(e=>e.id==='gov-recovery-plan')"));
});
test('unsupported reporting years and imported dates are never computed',()=>{
 const f=fixture();for(const year of ['1900','2024','2027'])assert.equal(f.run(`deadlineFor(KB.entries.find(e=>e.id==='filing-sfs-sfr-4m'),{fye:'${year}-12-31'}).date`),null);
 assert.equal(f.run("deadlineFor({...KB.entries.find(e=>e.id==='filing-sfs-sfr-4m'),imported:true},{fye:'2025-12-31'}).date"),null);
});
test('old overrides cannot mask shipped corrections and remain byte-for-byte intact',()=>{
 const f=fixture();const old=f.run("JSON.stringify({version:'2.1.0',entries:[{...KB.entries[0],text:'Obsolete local assertion'}]})");f.values.set('bcn_kb_overlay',old);
 assert.ok(!f.run("activeKB().entries[0].text").includes('Obsolete'));assert.equal(f.values.get('bcn_kb_overlay'),old);assert.match(f.run('migrationNotice'),/preserved/);
});
test('same-version but different-baseline overlays are quarantined',()=>{
 const f=fixture();const raw=f.run("JSON.stringify({schema_version:2,base_version:KB.version,base_fingerprint:'old',entries:[{...KB.entries[0],text:'Wrong baseline'}]})");f.values.set('bcn_kb_overlay_v2',raw);assert.ok(!f.run('activeKB().entries[0].text').includes('Wrong baseline'));assert.equal(f.values.get('bcn_kb_overlay_v2'),raw);
});
test('malformed and cross-tab changes after preview are never overwritten',()=>{
 for(const mutation of ['{broken','{"entries":[null]}','{"another":"tab"}']){
  const f=fixture();f.element('kbFragment').value=f.run("JSON.stringify([{...KB.entries[0],text:'New reviewed text'}])");f.run('previewFragment()');f.values.set('bcn_kb_overlay_v2',mutation);f.run('mergeFragment()');assert.equal(f.values.get('bcn_kb_overlay_v2'),mutation);
 }
});
test('explicit merge preserves legacy data and renders imported review claims as unendorsed',()=>{
 const f=fixture();f.values.set('bcn_kb_overlay','{legacy damaged');f.element('kbFragment').value=f.run("JSON.stringify([{...KB.entries[0],text:'Local text',legal_review:'reviewed'}])");f.run('previewFragment();mergeFragment()');assert.equal(f.values.get('bcn_kb_overlay'),'{legacy damaged');
 assert.equal(f.run('activeKB().entries[0].legal_review'),'pending');assert.equal(f.run('activeKB().entries[0].imported'),true);
 const stored=JSON.parse(f.values.get('bcn_kb_overlay_v2'));assert.equal(stored.schema_version,2);assert.equal(stored.base_version,f.run('KB.version'));
});
test('legacy bookmarks ask for new facts without modifying saved records',()=>{
 const f=fixture();const raw=JSON.stringify([{id:'old',prepared_by:'Test',saved_at:'2026-09-16T12:00:00Z',kb_version:'2.1.0',inputs:{entityType:'insurer',entityClass:'classE',mode:'DISTIL',fye:'2025-12-31',task:'',focus:[]}}]);f.values.set('bcn_assessments',raw);f.run("reopenAssessment('old')");assert.match(f.element('appStatus').textContent,/Confirm the new applicability/);assert.equal(f.values.get('bcn_assessments'),raw);
});
test('all five tasks render with unknown facts for every supported insurer class',()=>{
 const f=fixture();for(const cls of f.data('Object.keys(KB.insurerClasses)'))for(const task of ['newlicence','extension','controller','approvedperson','modification']){profile(f,cls,{},'EXECUTE',task);f.run('renderResults(true)');assert.ok(f.element('results').innerHTML.includes('Report scope'));}
});
test('new metadata rejects malformed structures and unsafe added source links',()=>{
 const f=fixture();for(const mutation of ["e.rule={kind:'invented'}","e.reporting_period={from:'x',to:'y'}","e.sources=[{type:'legislation',name:'x',url:'javascript:alert(1)'}]","e.data.rows=[null]"]){assert.equal(f.run(`(()=>{const e=JSON.parse(JSON.stringify(KB.entries.find(e=>e.id==='conseq-dividends')));${mutation};return validateFragment(JSON.stringify([e])).ok})()`),false);}
});
test('board-approval assertions and stale correction text do not survive release',()=>{
 const f=fixture();assert.ok(!f.run("KB.entries.find(e=>e.id==='task-modification').data.template").includes('has considered and approved'));
 const texts=f.data('KB.entries.map(e=>e.text)').join(' ');assert.ok(!texts.includes('effective 31 August 2022'));assert.ok(!texts.includes('other than domestic-only'));assert.ok(!texts.includes('administration transferring'));
});
test('app/KB mismatch prevents report generation',()=>{
 const f=fixture();profile(f);f.run("KB.version='2.1.0';renderResults(true)");assert.match(f.element('appStatus').textContent,/versions differ/);assert.equal(f.element('results').innerHTML,'');
});

test('every task retains its own letter and fee through wizard transitions for every insurer class',()=>{
 const f=fixture(),subjects={extension:'Filing deadline extension',newlicence:'Insurer registration application',modification:'Exemption / modification application',controller:'Shareholder controller notification',approvedperson:'Appointment submission'};
 for(const cls of f.data('Object.keys(KB.insurerClasses)'))for(const [task,subject] of Object.entries(subjects)){
  profile(f,cls,{filingType:'statutory'},'EXECUTE','extension');
  f.element('entityType').value='insurer';f.element('entityClass').value=cls;f.element('taskType').value=task;
  f.run('toStep(3);renderResults(true)');
  assert.equal(f.run('state.task'),task);
  const out=f.element('results').innerHTML;
  assert.ok(out.includes('Subject: '+subject),cls+' '+task);
  for(const other of Object.values(subjects).filter(s=>s!==subject))assert.ok(!out.includes('Subject: '+other));
  assert.equal(out.includes('Filing selection:'),task==='extension');
  f.run('syncForm();toStep(2);toStep(3);renderResults(true)');assert.equal(f.run('state.task'),task);
 }
});

test('saved application records preserve task identity and PCC facts without rewriting originals',()=>{
 const f=fixture();
 for(const task of ['newlicence','extension','modification','controller','approvedperson']){
  profile(f,'classE',{amlRfi:'yes',keyVetting:'yes',pccDocument:'unavailable'},'EXECUTE',task);
  const raw=JSON.stringify([{id:'saved-test',prepared_by:'Test',saved_at:'2026-09-22T12:00:00Z',kb_version:'2.2.0',inputs:f.data('state')}]);
  f.values.set('bcn_assessments',raw);f.run("state.task='extension';reopenAssessment('saved-test')");
  assert.equal(f.run('state.task'),task);assert.equal(f.element('taskType').value,task);assert.equal(f.values.get('bcn_assessments'),raw);
  assert.equal(f.run("fact('pccDocument')"),'unavailable');
 }
});

test('PCC preparation is gated, unknowns stay conditional and adverse answers escalate',()=>{
 const f=fixture();profile(f,'classE',{},'EXECUTE','approvedperson');
 assert.ok(!f.run('relevantFacts()').includes('pccAge'));assert.ok(!f.run('taskPccCard()').includes('Preparing documents'));
 f.run("state.facts={amlRfi:'no',keyVetting:'yes'}");assert.equal(f.run('taskPccCard()'),'');
 f.run("state.facts={amlRfi:'yes',keyVetting:'yes',completeBefore:'no',applicationDate:'2026-10-01',pccAge:'old',pccResidence:'uncertain',pccDocument:'unavailable'}");
 assert.ok(f.run('relevantFacts()').includes('pccAge'));const out=f.run('taskPccCard()');
 for(const term of ['older than 12 months','Contact the BMA early','Exactly six months','Exactly 12 months','not additional BMA mandates','case by case'])assert.ok(out.includes(term),term);
 f.run("state.facts.completeBefore='yes'");assert.ok(!f.run('taskPccCard()').includes('Preparing documents'));assert.match(f.run('taskPccCard()'),/Transitional exception/);
 f.run("state.facts.completeBefore='unknown';state.facts.amlRfi='unknown'");assert.match(f.run('taskPccCard()'),/Conditional/);
});

test('PCC import structure and saved answers reject invalid types and escape text',()=>{
 const f=fixture();
 for(const value of [null,[],{preparation:'wrong'},{requirement:'x',transition:'x',formatNote:'x',preparation:[null]}]){
  assert.equal(f.run(`(()=>{const e=JSON.parse(JSON.stringify(KB.entries.find(e=>e.id==='gov-key-person-pcc')));e.data.pcc=${JSON.stringify(value)};return validateFragment(JSON.stringify([e])).ok})()`),false);
 }
 profile(f,'classE',{amlRfi:'yes',keyVetting:'yes'},'EXECUTE','newlicence');
 assert.equal(f.run("validInputs({...state,facts:{pccAge:'invented'}})"),false);
 assert.ok(f.run("pccPreparation({data:{pcc:{requirement:'<script>',transition:'',formatNote:'',preparation:['<img onerror=x>']}}})").includes('&lt;script&gt;'));
});

test('clipboard and fallback operate on the currently rendered draft only',async()=>{
 const f=fixture();let copied='';f.run('navigator.clipboard={}');f.run('navigator').clipboard.writeText=async text=>{copied=text;};
 for(const task of ['extension','modification','newlicence','controller','approvedperson']){
  profile(f,'classE',{},'EXECUTE',task);f.run('renderResults(true)');
  const raw=f.element('results').innerHTML.match(/<textarea id="tplraw"[^>]*>([\s\S]*?)<\/textarea>/)[1];
  f.element('tplraw').value=raw;await f.run('copyTemplate()');assert.equal(copied,raw);
 }
 f.run('navigator.clipboard=undefined');let selected=false;f.element('tplraw').select=()=>{selected=true;};await f.run('copyTemplate()');assert.equal(selected,true);assert.match(f.element('copyStatus').textContent,/Automatic copy is unavailable/);
});

// Depth programme Phase 1: shared background template, data-driven profile metadata and entity details structure.
const escHtml=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
function selections(f){
  const out=f.data('Object.keys(KB.insurerClasses)').map(id=>['insurer',id]);
  for(const t of f.data('KB.scopeGroups.nonInsurers')){if(t==='daba')for(const c of f.data('Object.keys(KB.dabaClasses)'))out.push(['daba',c]);else out.push([t,''])}
  return out;
}
function statusPattern(f,record){return f.run(record+".meta.approval")==="pending"?/Editorial review pending/:/Owner-approved editorial copy/;}
function render(f,type,cls,mode='MAP'){f.run(`Object.assign(state,{entityType:${JSON.stringify(type)},entityClass:${JSON.stringify(cls)},mode:${JSON.stringify(mode)},task:'',focus:[],facts:{}});renderResults(true)`);return f.element('results').innerHTML;}
test('profile metadata and depth fields are data-driven and schema-valid',()=>{
  const f=fixture();
  const errors=f.data(`(()=>{const errors=[],sources=KB.class_profile_sources,iso=/^\\d{4}-\\d{2}-\\d{2}$/;
    const claim=(c,label,legal)=>{if(!c?.text||!c.pin||!Array.isArray(c.sources)||!c.sources.length){errors.push(label+' incomplete');return;}for(const s of c.sources)if(!sources[s])errors.push(label+' source '+s);if(legal&&!c.sources.some(s=>['law','rule'].includes(sources[s]?.kind)))errors.push(label+' without primary law');if(c.status!==undefined&&!['confirmed','single-source','single-news-example','review-pending','conflicting','not-established'].includes(c.status))errors.push(label+' status');};
    const meta=(m,label)=>{if(m===undefined)return;if(!iso.test(m.researched_on||'')||!iso.test(m.review_due||'')||m.review_due<=m.researched_on||!['owner-editorial','pending'].includes(m.approval))errors.push(label+' meta');};
    const depth=(d,label)=>{for(const k of ['business','limits'])for(const c of d[k]||[])claim(c,label+'.'+k);
      for(const t of d.terms||[]){claim(t,label+'.terms');if(!t.term||!['statutory','regulatory','market'].includes(t.usage))errors.push(label+' term usage');if(t.usage==='regulatory'&&!t.sources.every(s=>sources[s]&&sources[s].tier<=2&&!['industry','news'].includes(sources[s].kind)))errors.push(label+' regulatory term needs official sources');if(t.usage==='statutory'&&!t.sources.some(s=>sources[s]?.kind==='law'))errors.push(label+' statutory term without law');}
      const ids=new Set();for(const s of d.subcategories||[]){if(!s.id||!s.label||ids.has(s.id)||!Array.isArray(s.claims)||!s.claims.length)errors.push(label+' subcategory '+s.id);ids.add(s.id);(s.claims||[]).forEach(c=>claim(c,label+'.'+s.id));}};
    for(const [id,d] of Object.entries(KB.class_profile_details)){if(!d.meta)errors.push(id+' meta missing');meta(d.meta,id);depth(d,id);}
    const records=[];for(const [t,v] of Object.entries(KB.entity_profile_details||{}))if(v?.title)records.push([t,v]);else for(const [c,w] of Object.entries(v||{}))records.push([t+'.'+c,w]);
    for(const [label,r] of records){if(!r?.title)errors.push(label+' title');meta(r.meta,label);
      for(const k of ['glance','history','purpose','industry','distinctions','footprint','market','misconceptions'])for(const c of r[k]||[])claim(c,label+'.'+k);
      for(const c of r.qualification||[])claim(c,label+'.qualification',true);depth(r,label);
      for(const e of r.developments||[])if(!KB.entries.some(x=>x.id===e))errors.push(label+' development '+e);}
    return errors;})()`);
  assert.deepEqual(errors,[]);
  for(const id of f.data('Object.keys(KB.class_profile_details)')){const approval=f.run('KB.class_profile_details['+JSON.stringify(id)+'].meta.approval');assert.match(render(f,'insurer',id),approval==='pending'?/Researched 25 September 2026 · Review due 25 March 2027 · Editorial review pending/:/Researched 25 September 2026 · Review due 25 March 2027 · Owner-approved editorial copy/,id);}
  f.run("KB.class_profile_details.class1.meta.review_due='2026-01-01'");assert.match(render(f,'insurer','class1'),/Review overdue/);
});
test('every shipped background claim renders in the overview and nowhere else',()=>{
  const f=fixture();
  for(const [type,cls] of selections(f)){
    f.run(`Object.assign(state,{entityType:${JSON.stringify(type)},entityClass:${JSON.stringify(cls)}})`);
    const claims=f.data(`(()=>{const out=[];const walk=v=>{if(Array.isArray(v))v.forEach(walk);else if(v&&typeof v==='object'){if(typeof v.text==='string'&&Array.isArray(v.sources))out.push(v.text);Object.values(v).forEach(walk);}};
      const id=state.entityClass;
      if(state.entityType==='insurer'){if(KB.class_profiles[id]){walk(KB.class_profiles[id]);for(const r of KB.class_profile_comparison.rows)walk(r.cells[id]);}else{walk(KB.class_profile_details[id]);walk(KB.class_profile_shared_history);}}
      else walk(entityProfileRecord(KB.entity_profile_details)||entityProfileRecord(KB.entity_profile_context));
      return out;})()`);
    assert.ok(claims.length>0,`${type}/${cls} has claims`);
    const map=render(f,type,cls,'MAP');
    for(const text of claims)assert.ok(map.includes(escHtml(text)),`${type}/${cls} missing: ${text.slice(0,60)}`);
    for(const mode of ['DISTIL','EXECUTE']){
      const other=render(f,type,cls,mode);
      assert.ok(!/id="(classBackground|entityBackground)"/.test(other),`${type}/${cls} ${mode} leakage`);
      assert.ok(!other.includes(escHtml(claims[claims.length-1])),`${type}/${cls} ${mode} claim leakage`);
    }
  }
});
test('new template sections render only when data exists, escape content and label market usage',()=>{
  const f=fixture();
  f.run('for(const k of ["business","subcategories","terms"])delete KB.class_profile_details.class2[k]');
  let result=render(f,'insurer','class2');
  for(const h of ['How it is used in practice','Sub-categories and routes','Key terms'])assert.ok(!result.includes(h),'empty '+h);
  f.run(`KB.class_profile_details.class2.business=[{text:'<b>Captive</b> use context',sources:['act'],pin:'s.4B'}];
    KB.class_profile_details.class2.terms=[{term:'<i>Captive</i>',usage:'market',text:'Industry label.',sources:['act'],pin:'s.4B'}]`);
  result=render(f,'insurer','class2');
  assert.match(result,/How it is used in practice/);assert.match(result,/not an eligibility test/);assert.match(result,/Key terms/);assert.match(result,/Market usage/);
  assert.ok(result.includes('&lt;b&gt;Captive&lt;/b&gt;')&&result.includes('&lt;i&gt;Captive&lt;/i&gt;'));
  assert.ok(!result.includes('<b>Captive')&&!result.includes('<i>Captive'));
  assert.ok(result.indexOf('Why the class exists')<result.indexOf('How it is used in practice')&&result.indexOf('How it is used in practice')<result.indexOf('How it differs from neighbouring classes'));
  assert.ok(!render(f,'insurer','class2','DISTIL').includes('How it is used in practice'));
});
test('entity details take precedence over context per selection, with sub-categories and sources',()=>{
  const f=fixture();
  f.run(`KB.entity_profile_details.intermediary={title:'Intermediary profile',glance:[{text:'Glance claim.',sources:['act'],pin:'s.1(1)'}],
    subcategories:[{id:'manager',label:'Insurance <manager>',claims:[{text:'Manager claim.',sources:['act'],pin:'s.1(1)'}]}],
    limits:[{text:'Limit claim.',sources:['act'],pin:'s.9',status:'review-pending'}],meta:{researched_on:'2026-09-25',review_due:'2027-03-25',approval:'pending'}};
    KB.entity_profile_details.daba={classM:{title:'DABA M profile',glance:[{text:'M glance.',sources:['act'],pin:'x'}]}}`);
  let result=render(f,'intermediary','');
  assert.match(result,/Entity background \(context, not requirements\)/);assert.match(result,/Intermediary profile/);
  assert.match(result,/Sub-categories and routes/);assert.ok(result.includes('Insurance &lt;manager&gt;'));assert.match(result,/Manager claim\./);
  assert.match(result,/Limits of current information/);assert.match(result,/Insurance Act 1978/);assert.match(result,/Editorial review pending/);
  assert.ok(!result.includes('Intermediary role context'),'context replaced');assert.ok(!result.includes('Illustrative content — pending legal review'));
  assert.match(render(f,'daba','classM'),/DABA M profile/);
  result=render(f,'daba','classF');assert.match(result,/DABA Class F context/);assert.match(result,/Core framework/);
  assert.match(render(f,'msb',''),/Sources for this profile/);
  assert.ok(!render(f,'intermediary','','EXECUTE').includes('Manager claim.'));
});
test('entity details are fingerprinted and cannot be imported',()=>{
  const f=fixture();
  assert.equal(f.run("(()=>{const a=JSON.parse(JSON.stringify(activeKB())),b=JSON.parse(JSON.stringify(a));b.entity_profile_details={msb:{title:'x',glance:[]}};return kbFingerprint(a)===kbFingerprint(b)})()"),false);
  const v=f.data("validateFragment(JSON.stringify({entries:[KB.entries[0]],entity_profile_details:{msb:{title:'x'}}}))");
  assert.equal(v.ok,false);assert.ok(v.errors.some(e=>/entity details/.test(e)));
});

// Depth programme Phase 2: pilot business-context content (class1, intermediary) and editorial rules BC-1/BC-2.
test('business-context claims follow the evidence bar and avoid eligibility language',()=>{
  const f=fixture();
  const errors=f.data(`(()=>{const errors=[],src=KB.class_profile_sources;
    const records=[...Object.entries(KB.class_profile_details).map(([id,d])=>[id,d])];
    for(const [t,v] of Object.entries(KB.entity_profile_details))if(v?.title)records.push([t,v]);else for(const [c,w] of Object.entries(v||{}))records.push([t+'.'+c,w]);
    for(const [id,d] of records){
      const practice=[...(d.business||[]),...(d.terms||[]).filter(t=>t.usage==='market')];
      for(const c of practice){
        if(/\\b(must|may only|is required to|are required to|mandatory)\\b/i.test(c.text))errors.push(id+' eligibility wording: '+c.text.slice(0,50));
        if(/\\b(typically|commonly|generally|frequently|usually|often)\\b/i.test(c.text)){
          const kinds=c.sources.map(s=>src[s]);const official=kinds.some(s=>s&&s.tier<=2);const industry=new Set(kinds.filter(s=>s?.kind==='industry').map(s=>s.publisher));
          if(!official&&industry.size<2&&!['single-source','single-news-example'].includes(c.status))errors.push(id+' BC-1: '+c.text.slice(0,50));
        }
      }
    }
    return errors;})()`);
  assert.deepEqual(errors,[]);
});
test('Class 1 pilot shows business context, terms and limits while keeping approved copy',()=>{
  const f=fixture();
  const result=render(f,'insurer','class1');
  for(const h of ['How it is used in practice','Key terms','Limits of current information'])assert.ok(result.includes(h),h);
  assert.match(result,/general liability made up 49% of Class 1 long-tail premium/);
  assert.match(result,/Pure captive/);assert.match(result,/Statutory term/);assert.match(result,/Market usage/);
  assert.match(result,/three Class 1 applications approved and two new Class 1 registrations/);
  assert.match(result,statusPattern(f,'KB.class_profile_details.class1'));
  assert.match(result,/The BMA calls it a single-parent captive category/);
  assert.ok(result.indexOf('How it is used in practice')<result.indexOf('What qualifies an entity'));
  assert.ok(!render(f,'insurer','class1','DISTIL').includes('How it is used in practice'));
});
test('intermediary pilot covers manager, broker and agent without resolving the intragroup question',()=>{
  const f=fixture();
  const result=render(f,'intermediary','');
  assert.match(result,/Insurance intermediary background/);
  for(const role of ['Insurance manager','Insurance broker','Insurance agent'])assert.ok(result.includes('<h4>'+role+'</h4>'),role);
  const carried=f.data("KB.entity_profile_context.intermediary.claims.filter(c=>c.status!=='review-pending').map(c=>c.text)");
  for(const text of carried)assert.ok(result.includes(escHtml(text)),'carried: '+text.slice(0,40));
  const limit=f.data("KB.entity_profile_details.intermediary.limits.find(c=>/corporate group/.test(c.text))");
  assert.equal(limit.status,'review-pending');assert.ok(limit.sources.includes('bma_ialc_2026'));
  assert.match(result,/not presented here as a blanket exemption/);assert.match(result,/Source scope to confirm/);
  assert.ok(!/licen[cs]e is not required|does not need to register|exempt from registration/i.test(result));
  assert.match(result,statusPattern(f,'KB.entity_profile_details.intermediary'));
  for(const mode of ['DISTIL','EXECUTE'])assert.ok(!render(f,'intermediary','',mode).includes('Sub-categories and routes'),mode);
  const bad=f.data("['bma_manager_code','bma_ba_code','bma_ialc_2026','bma_update_2016q2','bma_update_2019q1','bma_setup','appleby_captives'].filter(id=>{const s=KB.class_profile_sources[id];return !s||!/^https:\\/\\//.test(s.url)||!/^\\d{4}-\\d{2}-\\d{2}$/.test(s.retrieved)})");
  assert.deepEqual(bad,[]);
});

// Depth programme Phase 3, batch 1: Classes 2, 3, A and B business context.
test('captive-class batch shows class-specific context and labels combined A/B figures',()=>{
  const f=fixture();
  const expect={class2:[/33% of Class 2 long-tail premium/,/three Class 2 applications approved and five new Class 2 registrations/,/Group captive/,/Association captive/],
    class3:[/single-parent, group or association agency, or joint venture captives/,/61% of Class 3 short-tail premium/,/Rent-a-captive/,/Agency captive/],
    classA:[/single-parent long-term captive/,/two-class observation, not a Class A-only figure/,/Long-term business/,/one Class A application approved/],
    classB:[/multi-owner long-term captive/,/two-class observation, not a Class B-only figure/,/no Class B row/]};
  for(const [id,patterns] of Object.entries(expect)){
    const result=render(f,'insurer',id);
    for(const p of patterns)assert.match(result,p,id+' '+p);
    for(const h of ['How it is used in practice','Key terms','Limits of current information'])assert.ok(result.includes(h),id+' '+h);
    assert.ok(result.indexOf('How it is used in practice')<result.indexOf('What qualifies an entity'),id+' order');
    assert.ok(!render(f,'insurer',id,'DISTIL').includes('How it is used in practice'),id+' leakage');
  }
});
test('direct quotes in business context and terms stay under 15 words',()=>{
  const f=fixture();
  const long=f.data(`(()=>{const out=[];const recs=[...Object.values(KB.class_profile_details)];for(const v of Object.values(KB.entity_profile_details))if(v?.title)recs.push(v);else recs.push(...Object.values(v||{}));
    for(const d of recs)for(const c of [...(d.business||[]),...(d.terms||[]),...(d.subcategories||[]).flatMap(s=>s.claims)])for(const m of c.text.matchAll(/"([^"]+)"/g))if(m[1].trim().split(/\\s+/).length>=15)out.push(m[1]);return out;})()`);
  assert.deepEqual(long,[]);
});

// Depth programme Phase 3, batch 2: commercial general-business Classes 3A, 3B and 4.
test('commercial-class batch shows class statistics, labels combined 3B/4 findings and regulatory terms',()=>{
  const f=fixture();
  const expect={class3a:[/small commercial insurers/,/115 Class 3A licences with US\$20\.5 billion gross premiums/,/two Class 3A applications approved and one new Class 3A registration/,/covers Classes 3B and 4 only/],
    class3b:[/largest property and casualty commercial insurers/,/US\$7\.6 billion of the net premiums for Class 3B and US\$64\.9 billion for Class 4/,/not Class 3B-only figures/,/should not be read as a Class 3B profile/],
    class4:[/direct excess liability insurance and\/or property catastrophe reinsurance/,/US\$82\.3 billion gross premiums, the largest of the general-business classes/,/not Class 4-only figures/,/no new Class 4 registration/,/Realistic Disaster Scenarios/]};
  for(const [id,patterns] of Object.entries(expect)){
    const result=render(f,'insurer',id);
    for(const p of patterns)assert.match(result,p,id+' '+p);
    assert.match(result,/Regulatory term/,id+' regulatory label');
    assert.match(result,statusPattern(f,'KB.class_profile_details.'+id),id+' status');
    assert.ok(!render(f,'insurer',id,'DISTIL').includes('How it is used in practice'),id+' leakage');
  }
  // The combined 3B + 4 figures quoted from the catastrophe study must agree with the class table they are split against.
  assert.equal(Math.round((7642+64949)/100)/10,72.6);assert.equal(Math.round((53954+284044)/100)/10,338.0);
});

// Depth programme Phase 3, batch 3: Classes C and D, and 2024 class statistics for the captive classes.
test('long-term commercial batch labels the C/D/E cohort and qualifies balance-sheet assets',()=>{
  const f=fixture();
  const expect={classC:[/two-thirds of 2024 reserves were allocated to longevity and financial business/,/not Class C-only figures/,/92 Class C licences with US\$57\.1 billion gross premiums/,/excludes amounts held in segregated accounts/,/four Class C applications approved and four new Class C registrations/,/Enhanced Capital Requirement/,/not reconciled here/],
    classD:[/Class D is a small part of that cohort/,/US\$119 million gross premiums/,/not the section 4EE classification measure/,/no Class D row/,/Total assets \(Classes C, D and E\)/]};
  for(const [id,patterns] of Object.entries(expect)){
    const result=render(f,'insurer',id);
    for(const p of patterns)assert.match(result,p,id+' '+p);
    assert.match(result,statusPattern(f,'KB.class_profile_details.'+id),id+' status');
    assert.ok(!render(f,'insurer',id,'EXECUTE').includes('How it is used in practice'),id+' leakage');
  }
  const stats={class1:/170 Class 1 licences with US\$2\.5 billion/,class2:/253 Class 2 licences with US\$10\.3 billion/,class3:/185 Class 3 licences with US\$19\.1 billion/,classA:/11 Class A licences with US\$1\.9 billion/,classB:/13 Class B licences with US\$291 million/};
  for(const [id,p] of Object.entries(stats))assert.match(render(f,'insurer',id),p,id+' 2024 statistics');
});

// Depth programme Phase 3, batch 4: IIGB and Class E, under the approved IIGB disclosure and the Class E BC-7 constraints.
test('Class E depth content avoids thresholds, cedant profiles and classification ladders (BC-7)',()=>{
  const f=fixture();
  const d=f.data('KB.class_profile_details.classE');
  const added=[...(d.business||[]),...(d.terms||[]),...(d.limits||[]),...d.footprint.slice(1)];
  assert.ok(added.length>=6);
  for(const c of added)assert.ok(!/\$\s?500|500 million|cedant|typical|ladder|registrable as Class E|qualif/i.test(c.text),'BC-7: '+c.text.slice(0,60));
  const result=render(f,'insurer','classE');
  for(const p of [/US\$145\.5 billion gross premiums, the largest of any insurer class/,/not a Class E-only result/,/not the statutory classification measure/,/ten Class E applications approved and six new Class E registrations/])assert.match(result,p);
  assert.match(result,/Conflicting sources/);
  assert.match(result,statusPattern(f,'KB.class_profile_details.classE'));
});
test('IIGB depth content adds context without competing licence counts',()=>{
  const f=fixture();
  const d=f.data('KB.class_profile_details.iigb');
  assert.equal(d.footprint.length,1,'approved 2025 disclosure stays the only footprint claim');
  for(const c of [...d.business,...d.terms,...d.limits.slice(1)])assert.ok(!/\b(seven|eight|7|8)\b/.test(c.text),'count in: '+c.text.slice(0,60));
  const result=render(f,'insurer','iigb');
  for(const p of [/digital assets or cryptocurrency/,/an illustration, not the statutory test/,/Digital Finance Supervision/,/Innovative insurance business/,/no Class IIGB row/])assert.match(result,p);
  assert.match(result,/report does not reconcile the figures/);
  assert.match(result,statusPattern(f,'KB.class_profile_details.iigb'));
});

// Owner instruction (25 Sep 2026): the CI and SPI profiles and their comparison change only with explicit owner approval,
// and never become less deep. Update this fingerprint only as part of an owner-approved CI/SPI change.
test('CI and SPI pilot profiles and comparison are unchanged without owner approval',()=>{
  const f=fixture();
  const pilot=f.data('({profiles:{collateralized:KB.class_profiles.collateralized,spi:KB.class_profiles.spi},comparison:KB.class_profile_comparison})');
  assert.equal(crypto.createHash('sha256').update(JSON.stringify(pilot)).digest('hex'),'a4633f67a60d692b7f04c93ad36f79be5c9406d939563380486aa86b5bdc63d7');
});

// Depth programme sector batch 5: investment business, trust business and corporate service providers.
test('investment, trust and CSP profiles show routes, carried-over claims and dated counts',()=>{
  const f=fixture();
  const expect={
    investment:{roles:['Standard licence','Test licence','Class A registered person','Class B registered person','Non-registrable persons'],patterns:[/54 licensed investment business licensees/,/should not be added together/,/not more than twenty persons at any time/,/section 13\(1\)\(b\)/]},
    trust:{roles:['Unlimited trust licence','Limited trust licence','Exemption routes'],patterns:[/does not authorise acting as sole trustee/,/six new private trust companies in 2025/,/31 March each year/,/Private trust company/]},
    csp:{roles:['Unlimited licence','Limited licence','Exemption routes'],patterns:[/86 CSP licensees/,/exemptions are not counted as licences/,/prudential oversight of corporate service providers/,/Formation agent/,/s\.2\(2\), \(5\)/]}};
  for(const [type,{roles,patterns}] of Object.entries(expect)){
    const result=render(f,type,'');
    for(const r of roles)assert.ok(result.includes('<h4>'+r+'</h4>'),type+' '+r);
    for(const p of patterns)assert.match(result,p,type+' '+p);
    const carried=f.data(`KB.entity_profile_context[${JSON.stringify(type)}].claims.map(c=>c.text)`);
    for(const text of carried)assert.ok(result.includes(escHtml(text)),type+' carried: '+text.slice(0,40));
    assert.match(result,statusPattern(f,`KB.entity_profile_details[${JSON.stringify(type)}]`),type+' status');
    assert.ok(!render(f,type,'','DISTIL').includes('Sub-categories and routes'),type+' leakage');
  }
});

// Depth programme sector batch 6: bank / deposit company, fund administration and MSB.
test('bank, fund administration and MSB profiles keep resolved and conflicting notes intact',()=>{
  const f=fixture();
  const expect={
    bank:{roles:['Banking licence','Deposit company licence','Restricted banking licence'],patterns:[/17 August 2018/,/licensed casinos/,/not by being a smaller bank/,/five banking-sector licensees/,/economic and financial policy/]},
    fundadmin:{roles:[],patterns:[/31 December 2019/,/repealed Part III of the Investment Funds Act 2006/,/21 fund administration licensees/,/Conflicting sources/,/CSP Exemption Order/]},
    msb:{roles:['Licensed activities'],patterns:[/bureau de change/,/31 January 2017/,/one money service business licensee/,/does not apply to an institution licensed under the Banks/]}};
  for(const [type,{roles,patterns}] of Object.entries(expect)){
    const result=render(f,type,'');
    for(const r of roles)assert.ok(result.includes('<h4>'+r+'</h4>'),type+' '+r);
    for(const p of patterns)assert.match(result,p,type+' '+p);
    for(const text of f.data(`KB.entity_profile_context[${JSON.stringify(type)}].claims.map(c=>c.text)`))assert.ok(result.includes(escHtml(text)),type+' carried: '+text.slice(0,40));
    assert.match(result,statusPattern(f,`KB.entity_profile_details[${JSON.stringify(type)}]`),type+' status');
    assert.ok(!render(f,type,'','EXECUTE').includes('Limits of current information'),type+' leakage');
  }
  // The owner-resolved MSB exemption note is carried over exactly (text, citation and status) and no exemption-order detail is added.
  const ctx=f.data("KB.entity_profile_context.msb.claims.find(c=>c.text.includes('owner/legal-resolved'))");
  const det=f.data("KB.entity_profile_details.msb.limits.find(c=>c.text.includes('owner/legal-resolved'))");
  assert.deepEqual(det,ctx);
  assert.ok(!f.data("JSON.stringify(KB.entity_profile_details.msb)").includes('Exemption Order'));
});

// Depth programme sector batch 7: DABA Classes F, M and T (nested records).
test('DABA class profiles distinguish F, M and T and label combined and during-year figures',()=>{
  const f=fixture();
  const expect={classF:[/18 active Class F licences among 36/,/including 22 Class F licences/,/any or all of the listed activities/],
    classM:[/13 active Class M licences/,/including 21 Class M licences/,/expand operations for a limited period/,/not automatic/],
    classT:[/5 active Class T licences/,/including 7 Class T licences/,/test a proof of concept/,/state on its website/,/11 December 2020/]};
  for(const [cls,patterns] of Object.entries(expect)){
    const result=render(f,'daba',cls);
    for(const p of patterns)assert.match(result,p,cls+' '+p);
    for(const p of [/not a year-end register total/,/cover Classes F, M and T together/,/Licensable activities/])assert.match(result,p,cls+' '+p);
    for(const text of f.data(`KB.entity_profile_context.daba.${cls}.claims.map(c=>c.text)`))assert.ok(result.includes(escHtml(text)),cls+' carried: '+text.slice(0,40));
    assert.match(result,statusPattern(f,`KB.entity_profile_details.daba.${cls}`),cls+' status');
  }
  const appeal=f.data("KB.entity_profile_details.daba.classT.limits.find(c=>c.pin==='s.48(1)')");
  assert.deepEqual(appeal,f.data("KB.entity_profile_context.daba.classT.claims.find(c=>c.pin==='s.48(1)')"));
});
test('every selectable non-insurer has a full entity background profile',()=>{
  const f=fixture();
  for(const t of f.data('KB.scopeGroups.nonInsurers')){
    const classes=t==='daba'?f.data('Object.keys(KB.dabaClasses)'):[''];
    for(const c of classes){
      const rec=f.data(`(Object.assign(state,{entityType:${JSON.stringify(t)},entityClass:${JSON.stringify(c)}}),entityProfileRecord(KB.entity_profile_details))`);
      assert.ok(rec&&rec.title&&rec.meta,t+'/'+c+' has a details record');
    }
  }
});

// SBA topic deep-dive (Stage A): overview-only card for Classes C, D and E, built on the shared template.
test('SBA topic profile is schema-valid and follows the evidence and wording rules',()=>{
  const f=fixture();
  const errors=f.data(`(()=>{const errors=[],src=KB.class_profile_sources,t=KB.topic_profiles.sba;
    const claim=(c,label,legal)=>{if(!c?.text||!c.pin||!Array.isArray(c.sources)||!c.sources.length){errors.push(label+' incomplete');return;}for(const s of c.sources)if(!src[s]||!/^https:\\/\\//.test(src[s].url)||!/^\\d{4}-\\d{2}-\\d{2}$/.test(src[s].retrieved))errors.push(label+' source '+s);if(legal&&!c.sources.some(s=>['law','rule'].includes(src[s]?.kind)))errors.push(label+' needs primary law');};
    if(!t||!t.title||!Array.isArray(t.scope)||!t.meta)errors.push('topic shape');
    if(JSON.stringify(t.scope)!==JSON.stringify(['classC','classD','classE']))errors.push('scope');
    for(const k of ['glance','history','purpose','industry','business','distinctions','footprint','misconceptions','limits','horizon'])for(const c of t[k]||[])claim(c,k);
    for(const c of t.qualification)claim(c,'qualification',true);
    for(const s of t.subcategories)for(const c of s.claims)claim(c,'sub '+s.id,s.id==='capabilities');
    for(const term of t.terms){claim(term,'term '+term.term);if(term.usage==='regulatory'&&!term.sources.every(s=>src[s].tier<=2&&!['industry','news'].includes(src[s].kind)))errors.push('regulatory term source');}
    for(const c of [...t.business,...t.terms.filter(x=>x.usage==='market')]){if(/\\b(must|may only|is required to|are required to|mandatory)\\b/i.test(c.text))errors.push('BC-2 '+c.text.slice(0,40));
      if(/\\b(typically|commonly|generally|frequently|usually|often)\\b/i.test(c.text)){const k=c.sources.map(s=>src[s]);if(!k.some(s=>s.tier<=2)&&new Set(k.filter(s=>s.kind==='industry').map(s=>s.publisher)).size<2)errors.push('BC-1 '+c.text.slice(0,40));}}
    for(const c of profileClaimsIn(t))for(const m of c.text.matchAll(/"([^"]+)"/g))if(m[1].split(/\\s+/).length>=15)errors.push('long quote');
    return errors;})()`);
  assert.deepEqual(errors,[]);
});
test('SBA deep-dive renders only in the C/D/E overview and is linked from those backgrounds',()=>{
  const f=fixture();
  for(const cls of ['classC','classD','classE']){
    const result=render(f,'insurer',cls);
    assert.match(result,/id="topic-sba"/,cls);assert.match(result,/Topic deep-dive: Scenario-Based Approach \(SBA\) — context, not requirements/);
    for(const h of ['Approval routes and asset categories','SBA model approval','Asset categories and approvals','Technical capabilities: BMA requirements','Ongoing supervision','What applies (requirements from primary law)','How it differs from related approaches'])assert.ok(result.includes(h),cls+' '+h);
    for(const p of [/105% Liquidity Coverage Ratio/,/10% of the SBA portfolio in aggregate and 0\.5% per asset/,/nine prescribed interest-rate scenarios/,/outsourcing the running, maintenance and management of the SBA model is not allowed/,/31 March 2024/,/Not established/])assert.match(result,p,cls+' '+p);
    assert.match(result,/<a href="#topic-sba">Scenario-Based Approach \(SBA\) deep-dive \(below\)<\/a>/,cls+' link');
    assert.match(result,statusPattern(f,'KB.topic_profiles.sba'),cls+' status');
    for(const text of f.data('profileClaimsIn(KB.topic_profiles.sba).map(c=>c.text)'))assert.ok(result.includes(escHtml(text)),cls+' claim: '+text.slice(0,40));
    for(const mode of ['DISTIL','EXECUTE'])assert.ok(!render(f,'insurer',cls,mode).includes('topic-sba'),cls+' '+mode+' leakage');
  }
  for(const [type,cls] of [['insurer','class1'],['insurer','class3b'],['insurer','class4'],['insurer','spi'],['insurer','collateralized'],['trust',''],['daba','classF']]){
    const result=render(f,type,cls);assert.ok(!result.includes('topic-sba'),type+'/'+cls+' should not show SBA');
  }
});
test('SBA topic is fingerprinted and cannot be imported',()=>{
  const f=fixture();
  assert.equal(f.run("(()=>{const a=JSON.parse(JSON.stringify(activeKB())),b=JSON.parse(JSON.stringify(a));b.topic_profiles.sba.glance[0].text+=' x';return kbFingerprint(a)===kbFingerprint(b)})()"),false);
  const v=f.data("validateFragment(JSON.stringify({entries:[KB.entries[0]],topic_profiles:{sba:{title:'x'}}}))");
  assert.equal(v.ok,false);assert.ok(v.errors.some(e=>/topic profiles/.test(e)));
});
