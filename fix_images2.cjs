const fs = require('fs');

const files = [
  './src/components/Destinations.jsx',
  './src/pages/DestinationDetails.jsx'
];

const replacements = {
  '1505765052419-2f8f2b3b6a31': '1512343879784-a960bf40e7f2',
  '1625629158327-1875c742c3ff': '1605649487212-47bdab064df7',
  '1582510003544-4d00b7f7415e': '1571536802807-30451e3955d8',
  '1601334997096-7bbbeaa8a0da': '1528605248644-14dd04022da1'
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  for (const [broken, fixed] of Object.entries(replacements)) {
    content = content.split(broken).join(fixed);
  }
  fs.writeFileSync(file, content);
  console.log(`Replaced in ${file}`);
});
