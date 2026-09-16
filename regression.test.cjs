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
test('all 156 shipped entries pass the import schema',()=>{
  const f=fixture();assert.equal(f.run('KB.entries.length'),156);assert.deepEqual(f.data('validateFragment(JSON.stringify(KB.entries)).errors'),[]);
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
  f.values.set('bcn_kb_overlay',raw);f.run('renderResults(true)');
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
  const g=fixture();g.values.set('bcn_kb_overlay','{"entries":[null]}');assert.equal(g.run('activeKB().entries.length'),156);assert.ok(g.run('storageMessage').includes('ignored'));
});
test('malformed saved data is ignored and not overwritten by save',()=>{
  const f=fixture();f.values.set('bcn_assessments','{}');f.run("Object.assign(state,{entityType:'insurer',entityClass:'class1',fye:'',mode:'MAP',task:'',focus:[]});renderResults(true);confirmSaveAssessment()");assert.equal(f.values.get('bcn_assessments'),'{}');
});
test('bookmark fingerprint catches content change with an unchanged version',()=>{
  const f=fixture();assert.equal(f.run("(()=>{const a=JSON.parse(JSON.stringify(activeKB())),b=JSON.parse(JSON.stringify(a));b.entries[0].text+=' Updated.';return kbFingerprint(a)===kbFingerprint(b)})()"),false);
});
test('new resets inputs; reopen synchronizes focus checkboxes through syncForm',()=>{
  const f=fixture();f.run("Object.assign(state,{entityType:'insurer',entityClass:'classE',fye:'2025-12-31',mode:'MAP',task:'extension',focus:['capital']});startWizard()");assert.deepEqual(f.data('state'),{entityType:'',entityClass:'',fye:'',mode:'',task:'',focus:[]});
});
test('changed input after preview cannot merge an old fragment',()=>{
  const f=fixture();f.element('kbFragment').value=f.run('JSON.stringify([KB.entries[0]])');f.run('previewFragment()');f.element('kbFragment').value='null';f.run('mergeFragment()');assert.equal(f.values.has('bcn_kb_overlay'),false);assert.equal(f.run('pendingFragment'),null);
});
test('merge preserves the original research date and never overwrites invalid stored overlay',()=>{
  const f=fixture();f.element('kbFragment').value=f.run("JSON.stringify({version:'same-version',entries:[{...KB.entries[0],text:'Edited locally.'}]})");f.run('previewFragment();mergeFragment()');assert.equal(f.run('activeKB().as_at'),'2026-07-02');assert.equal(f.run('activeKB().version'),'same-version');
});
test('public app has no API request, password prompt, remote scripts or embedded LLM prompt',()=>{
  assert.ok(!html.includes('fetch('));assert.ok(!html.includes('api.anthropic.com'));assert.ok(!html.includes('type="password"'));assert.ok(!html.includes('MASTER_PROMPT_TEXT'));assert.ok(!/<script[^>]+src="https?:/.test(html));
});
