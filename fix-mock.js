const fs = require('fs');
const path = 'c:/Users/iagoor/Downloads/vendas/project/src/data/mockData.ts';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(/,\s*"buyUrl":\s*".*?"/g, '');
content = content.replace(/\s*"buyUrl":\s*".*?"/g, '');
fs.writeFileSync(path, content);
console.log('Fixed mockData.ts');
