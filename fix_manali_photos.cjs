const fs = require('fs');
const file = './src/pages/DestinationDetails.jsx';
let content = fs.readFileSync(file, 'utf8');

const target = `    photos: [
      'https://loremflickr.com/1200/800/manali,snow?lock=41',
      'https://loremflickr.com/1200/800/kasol,river?lock=42',
      'https://loremflickr.com/1200/800/himachal,mountains?lock=43',
      'https://loremflickr.com/1200/800/himalayas,valley?lock=44'
    ]`;

const replacement = `    photos: [
      'https://upload.wikimedia.org/wikipedia/commons/a/a2/Kasol_mountain_view.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/8/80/Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/1/11/Rohtang_Pass_in_July.jpg',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80'
    ]`;

content = content.replace(target, replacement);
fs.writeFileSync(file, content);
console.log('Updated Manali photos');
