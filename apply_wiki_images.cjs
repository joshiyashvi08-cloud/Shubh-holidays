const fs = require('fs');

const files = [
  './src/components/Destinations.jsx',
  './src/pages/DestinationDetails.jsx'
];

const replacements = [
  {
    find: /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+\?auto=format&fit=crop&w=\d+&q=80/g,
    replaceFn: (match, offset, string) => {
      const context = string.substring(Math.max(0, offset - 150), offset + 150);
      
      if (context.includes('Kedarnath')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kedarnath_Temple_in_Rainy_season.jpg/1280px-Kedarnath_Temple_in_Rainy_season.jpg';
      if (context.includes('Manali-Kasol') || context.includes('Kasol')) return 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Kasol_mountain_view.jpg';
      if (context.includes('Ayodhya')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg/1280px-Shri_Ram_Janambhoomi_Mandir%2C_Ayodhya_Dham.jpg';
      if (context.includes('Himachal')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg/1280px-Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg';
      if (context.includes('Shimla')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg/1280px-Landscape_of_Shimla_%2C_Himachal_Pradesh.jpg';
      if (context.includes('CharDham')) return 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Badrinath_Temple_Uttarakhand.jpg/1280px-Badrinath_Temple_Uttarakhand.jpg'; // Hardcoded Badrinath
      
      return match; 
    }
  }
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(r => {
    content = content.replace(r.find, r.replaceFn);
  });
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
