export function clampMinutes(value){const minutes=Number(value);if(!Number.isFinite(minutes))return 0;return Math.min(480,Math.max(0,Math.round(minutes)));}
