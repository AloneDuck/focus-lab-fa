import { useState } from "react";
import { clampMinutes } from "./domain/minutes.mjs";
export function App(){const [minutes,setMinutes]=useState(25);return <main dir="rtl"><h1>آزمایشگاه تمرکز</h1><label>دقیقه تمرکز<input value={minutes} onChange={(event)=>setMinutes(clampMinutes(event.target.value))}/></label></main>;}
