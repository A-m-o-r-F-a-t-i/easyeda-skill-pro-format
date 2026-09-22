const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const path = require('node:path');
const base = { groupId:'0', layerId:12, locked:true, zIndex:null, width:0.2, prohibitType:['COMPONENT','VIA','TRACK','FILL','COPPER','PLANE'], path:[[0,0,'L',10,0,10,10,0,0]], name:'TEST_KEEP_OUT', regionType:'PROHIBIT' };
function validate(prohibitType) {
  const r=spawnSync(process.execPath,[path.join(__dirname,'..','validate.js'),'t-pcb-region',JSON.stringify({...base,prohibitType})],{encoding:'utf8'});
  if (!r.stdout.trim()) throw Error(r.stderr || 'validator returned no result');
  return JSON.parse(r.stdout).valid;
}
test('REGION accepts all six native prohibitions including VIA',()=>assert.equal(validate(base.prohibitType),true));
test('REGION rejects string in place of an array',()=>assert.equal(validate('VIA'),false));
test('REGION rejects an unknown prohibition',()=>assert.equal(validate(['VIA','UNKNOWN']),false));
test('REGION rejects numeric SDK enums in native format',()=>assert.equal(validate([3]),false));
test('PROHIBIT rejects empty restrictions',()=>assert.equal(validate([]),false));
