// Run with: node tests/regression.test.cjs (also supports node --test)
// No dependencies. Tests execute shipped logic in an isolated VM with inert DOM stubs.
const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
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

test('all 161 shipped entries pass the import schema',()=>{
  const f=fixture();assert.equal(f.run('KB.entries.length'),161);assert.deepEqual(f.data('validateFragment(JSON.stringify(KB.entries)).errors'),[]);
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
  const g=fixture();g.values.set('bcn_kb_overlay_v2','{"entries":[null]}');assert.equal(g.run('activeKB().entries.length'),161);assert.ok(g.run('storageMessage').includes('invalid'));
});
test('malformed saved data is ignored and not overwritten by save',()=>{
  const f=fixture();f.values.set('bcn_assessments','{}');f.run("Object.assign(state,{entityType:'insurer',entityClass:'class1',fye:'',mode:'MAP',task:'',focus:[]});renderResults(true);confirmSaveAssessment()");assert.equal(f.values.get('bcn_assessments'),'{}');
});
test('bookmark fingerprint catches content change with an unchanged version',()=>{
  const f=fixture();assert.equal(f.run("(()=>{const a=JSON.parse(JSON.stringify(activeKB())),b=JSON.parse(JSON.stringify(a));b.entries[0].text+=' Updated.';return kbFingerprint(a)===kbFingerprint(b)})()"),false);
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
