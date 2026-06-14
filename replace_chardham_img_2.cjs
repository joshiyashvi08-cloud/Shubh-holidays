const fs = require('fs');

const files = [
  './src/components/Destinations.jsx',
  './src/pages/DestinationDetails.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.split('https://upload.wikimedia.org/wikipedia/commons/e/ec/Gangotri_Temple_at_Uttarakhand_India.jpg').join('https://upload.wikimedia.org/wikipedia/commons/9/98/Yamuna_at_Yamunotri.JPG');
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
