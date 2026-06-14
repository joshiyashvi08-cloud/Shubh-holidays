const fs = require('fs');

const files = [
  './src/components/Destinations.jsx',
  './src/pages/DestinationDetails.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.split('https://upload.wikimedia.org/wikipedia/commons/8/8e/Badrinath_Temple_Uttarakhand.jpg').join('https://upload.wikimedia.org/wikipedia/commons/e/ec/Gangotri_Temple_at_Uttarakhand_India.jpg');
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
