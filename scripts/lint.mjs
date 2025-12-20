import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
function walk(path){return readdirSync(path,{withFileTypes:true}).flatMap((entry)=>entry.isDirectory()?walk(join(path,entry.name)):[join(path,entry.name)]);}
for(const file of walk("src")){const source=readFileSync(file,"utf8");if(/TODO|console\.log/.test(source))throw new Error(`lint failed: ${file}`);}
console.log("focus lab lint passed");
