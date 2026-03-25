const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400/g, 'bg-green-500 hover:bg-green-600');
content = content.replace(/bg-gradient-to-r from-green-500 to-cyan-500/g, 'bg-green-500 hover:bg-green-600');
content = content.replace(/bg-gradient-to-r from-green-400 to-cyan-500 hover:from-green-300 hover:to-cyan-400/g, 'bg-green-500 hover:bg-green-600');
content = content.replace(/shadow-cyan-500\/30 hover:shadow-cyan-500\/50/g, 'shadow-green-500/30 hover:shadow-green-500/50');
content = content.replace(/shadow-cyan-500\/40 hover:shadow-cyan-500\/60/g, 'shadow-green-500/40 hover:shadow-green-500/60');

fs.writeFileSync('src/App.tsx', content);
console.log('Colors replaced');
