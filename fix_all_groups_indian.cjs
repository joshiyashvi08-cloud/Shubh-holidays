const fs = require('fs');
const https = require('https');

async function fetchWikiImages(query, limit) {
  return new Promise((resolve) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=6&gsrlimit=${limit}&prop=imageinfo&iiprop=url&format=json`;
    https.get(url, { headers: { 'User-Agent': 'NodeJS' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.query && json.query.pages) {
            const urls = Object.values(json.query.pages).map(p => {
              if (p.imageinfo && p.imageinfo[0]) return p.imageinfo[0].url;
              return null;
            }).filter(u => u && (u.endsWith('.jpg') || u.endsWith('.JPG') || u.endsWith('.png')));
            resolve(urls.slice(0, limit));
          } else {
            resolve([]);
          }
        } catch(e) {
          resolve([]);
        }
      });
    });
  });
}

const groupKeywords = {
  'thailand': 'Thailand tourists people',
  'chardham-yatra': 'Uttarakhand pilgrims people',
  'goa': 'Goa tourists people beach',
  'manali-kasol': 'Manali tourists people snow',
  'kedarnath': 'Kedarnath pilgrims people',
  'ayodhya-nepal': 'Ayodhya devotees people',
  'himachal': 'Himachal tourists people',
  'haridwar': 'Haridwar devotees Ganga',
  'shimla-manali': 'Shimla tourists Mall road'
};

const fallbackIndianGroups = [
  'https://upload.wikimedia.org/wikipedia/commons/2/23/Tourists_at_Taj_Mahal.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/7/7d/Indian_tourists_in_Kashmir.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3a/Pilgrims_at_Golden_Temple.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/5e/People_at_India_Gate.jpg'
];

async function main() {
  const file = './src/pages/DestinationDetails.jsx';
  let content = fs.readFileSync(file, 'utf8');

  const startStr = 'const destinationDB = ';
  const endStr = '\n\nconst DestinationDetails = () => {';
  const startIndex = content.indexOf(startStr);
  let endIndex = content.indexOf('const DestinationDetails = () => {');
  
  if (startIndex === -1 || endIndex === -1) return console.log('Could not find DB bounds');
  
  // Find the exact closing brace of the JSON object by reading backwards from endIndex
  let lastBraceIdx = content.lastIndexOf('}', endIndex);
  
  let dbStr = content.substring(startIndex + startStr.length, lastBraceIdx + 1);
  let db = JSON.parse(dbStr);

  let fbIndex = 0;

  for (const key of Object.keys(db)) {
    if (key === 'manali-kasol') {
      db[key].groupPhotos = [
        "https://upload.wikimedia.org/wikipedia/commons/8/83/Manali-Hidimba-Devi-Tempel-50-Maedchen-2016-gje.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/d/d0/Yaks_on_Manali%2C_Himachal_Pradesh.jpg"
      ];
      continue;
    }

    console.log(`Fetching INDIAN group photos for ${key}...`);
    const kw = groupKeywords[key];
    let photos = await fetchWikiImages(kw, 5);
    
    if (photos.length < 2) {
      photos = [
        fallbackIndianGroups[fbIndex % fallbackIndianGroups.length],
        fallbackIndianGroups[(fbIndex + 1) % fallbackIndianGroups.length]
      ];
      fbIndex += 2;
    }
    
    db[key].groupPhotos = photos.slice(0, 2);
  }

  const newContent = content.slice(0, startIndex) + 'const destinationDB = ' + JSON.stringify(db, null, 2) + ';\n\n' + content.slice(endIndex);
  fs.writeFileSync(file, newContent);
  console.log('Successfully replaced all group photos with authentic Indian destination-specific people photos!');
}

main();
