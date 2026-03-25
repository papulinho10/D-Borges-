const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/bg-white rounded-2xl p-8 border border-slate-100/g, 'bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-100/50');

fs.writeFileSync('src/App.tsx', content);
console.log('Cards updated');
