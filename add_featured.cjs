const fs = require('fs');

const fileContentUrl = 'c:/Users/iagoor/Downloads/vendas/project/src/data/mockData.ts';
let text = fs.readFileSync(fileContentUrl, 'utf8');

const parts = text.split('export const products: Product[] = ');
if (parts.length > 1) {
  const categoriesPart = parts[0];
  const productsPart = parts[1];
  
  const endIdx = productsPart.lastIndexOf('];');
  const productsJson = productsPart.substring(0, endIdx + 1);
  const rest = productsPart.substring(endIdx + 2);
  
  let products = JSON.parse(productsJson);
  
  // Set first 4 distinct items to featured
  const featuredIds = ['p1', 'p18', 'p24', 'p59'];
  
  products = products.map(p => ({
    ...p,
    featured: featuredIds.includes(p.id) || p.featured === true
  }));
  
  let newProductsJson = JSON.stringify(products, null, 2);
  const newContent = categoriesPart + 'export const products: Product[] = ' + newProductsJson + ';\n' + rest;
  
  fs.writeFileSync(fileContentUrl, newContent, 'utf8');
  console.log('Success formatting mockData.ts');
} else {
  console.log('Could not parse mockData.ts');
}
