const fs = require('fs');
const file = './src/pages/DestinationDetails.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace manali-kasol's groupPhotos block
content = content.replace(
  /"groupPhotos": \[\s*"https:\/\/images\.unsplash\.com\/photo-1523482580672-f109ba8cb9be\?auto=format&fit=crop&w=600&q=80",\s*"https:\/\/images\.unsplash\.com\/photo-1528605248644-14dd04022da1\?auto=format&fit=crop&w=600&q=80"\s*\]/g,
  `"groupPhotos": [
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Manali-Hidimba-Devi-Tempel-50-Maedchen-2016-gje.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Yaks_on_Manali%2C_Himachal_Pradesh.jpg"
    ]`
);

// Replace manali-kasol's photos block
content = content.replace(
  /"photos": \[\s*"https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/a\/a2\/Kasol_mountain_view\.jpg",\s*"https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/8\/80\/Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India\.jpg",\s*"https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/1\/11\/Rohtang_Pass_in_July\.jpg",\s*"https:\/\/images\.unsplash\.com\/photo-1605649487212-47bdab064df7\?auto=format&fit=crop&w=1200&q=80"\s*\]/g,
  `"photos": [
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Kasol_mountain_view.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Kullu_Valley_near_Manali%2C_Himachal_Pradesh%2C_India.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Rohtang_Pass_in_July.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Paragliding_in_Solang_valley.jpg"
    ]`
);

fs.writeFileSync(file, content);
console.log('Fixed Indian Manali photos!');
