const fs = require('fs');

const files = [
  './src/components/Destinations.jsx',
  './src/pages/DestinationDetails.jsx'
];

const replacements = {
  '1554481923-a691d78d2b56': '1512343879784-a960bf40e7f2'
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  for (const [broken, fixed] of Object.entries(replacements)) {
    content = content.split(broken).join(fixed);
  }
  fs.writeFileSync(file, content);
});
