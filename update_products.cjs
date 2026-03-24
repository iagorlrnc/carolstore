const fs = require('fs');

const path = 'c:/Users/iagoor/Downloads/vendas/project/src/data/mockData.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/({\s*"id":\s*"p\d+",[\s\S]*?"buyUrl":\s*"[^"]*")\s*}/g, (match, prefix) => {
  const nameMatch = match.match(/"name":\s*"(.*?)"/);
  if (!nameMatch) return match;
  const name = nameMatch[1];
  
  let desc = "1 mês";
  if (name.includes("3 Meses")) desc = "3 meses";
  else if (name.includes("5 Meses")) desc = "5 meses";
  else if (name.includes("12 Meses")) desc = "12 meses";
  else if (name.includes("1 Mês")) desc = "1 mês";
  else if (name.includes("1+1")) desc = "1+1";
  else if (name.includes("2+2")) desc = "2+2";
  else if (name.includes("3+3")) desc = "3+3";
  else if (name.includes("MSA")) desc = "Acesso";
  
  if (match.includes('"description"')) return match; 
  
  return prefix + `,\n    "description": "${desc}"\n  }`;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Update finished.');
