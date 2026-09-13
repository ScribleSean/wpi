import assert from 'node:assert/strict';
import {readFileSync,readdirSync,existsSync,statSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const manifest=JSON.parse(readFileSync(path.join(root,'docs/import-manifest.json')));
let verified=0;const destinations=new Set();
for(const source of manifest.sources){
 assert.match(source.revision,/^[a-f0-9]{40}$/);
 for(const file of source.files){
  assert(!destinations.has(file.destination),'Duplicate destination');destinations.add(file.destination);
  const resolved=path.resolve(root,file.destination);assert(resolved.startsWith(root+path.sep));
  const data=readFileSync(resolved);assert.equal(createHash('sha256').update(data).digest('hex'),file.sha256,file.destination);verified++;
  if(existsSync(path.join(root,'.git'))){
   const committed=execFileSync('git',['-C',root,'show',`HEAD:${file.destination}`],{maxBuffer:20e6});
   assert.equal(createHash('sha256').update(committed).digest('hex'),file.sha256,'Committed bytes: '+file.destination);
  }
 }
}
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name==='.git'?[]:e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
for(const file of walk(root)){
 const relative=path.relative(root,file).replaceAll('\\','/');
 assert(!/(^|\/)(\.env(?:\..*)?|\.gitmodules|\.DS_Store)$/.test(relative),relative);
 assert(!/(^|\/)(node_modules|\.idea|\.vscode)\//.test(relative),relative);
 assert(!/\.(bak|o|class|exe|iml)$/.test(relative),relative);
 assert(statSync(file).size<50e6,'Oversized file: '+relative);
 const data=readFileSync(file);if(data.includes(0))continue;
 const text=data.toString();
 // Skip this script because its scanner patterns intentionally resemble credential formats.
 if(!relative.startsWith('scripts/')){
  assert(!/mongodb(?:\+srv)?:\/\/[^\s'"<>]+@|gh[pousr]_[A-Za-z0-9]{20,}|github_pat_[A-Za-z0-9_]{20,}|AKIA[0-9A-Z]{16}|-----BEGIN (?:RSA |OPENSSH )?PRIVATE KEY-----/.test(text),'Credential-like content: '+relative);
 }
 if(relative.endsWith('.md')&&!destinations.has(relative)){
  for(const match of text.matchAll(/\]\(([^)]+)\)/g)){
   const target=match[1];if(/^[a-z]+:|^#/.test(target))continue;
   assert(existsSync(path.resolve(path.dirname(file),decodeURIComponent(target.split('#')[0]))),'Broken local index link: '+relative+' -> '+target);
  }
 }
}
for(const assignment of ['a3','a4']){
 const text=readFileSync(path.join(root,`courses/cs4241/assignments/${assignment}/server.js`),'utf8');
 assert(text.includes('const uri = process.env.MONGODB_URI;'));
 assert(!text.includes('console.log(req.body.Username + " " + req.body.Password)'));
}
console.log(`PASS: ${verified} imported files across ${manifest.sources.length} sources; hashes, index links, exclusions and credential-pattern scan.`);
