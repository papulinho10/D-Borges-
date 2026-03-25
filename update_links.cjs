const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/bg-green-500 hover:bg-green-600 text-slate-900/g, 'bg-green-500 hover:bg-green-600 text-white');

fs.writeFileSync('src/App.tsx', content);
console.log('Text colors fixed');
