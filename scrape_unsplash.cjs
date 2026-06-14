const https = require('https');

function searchUnsplash(query) {
  return new Promise((resolve, reject) => {
    https.get(`https://unsplash.com/s/photos/${encodeURIComponent(query)}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Unsplash image URLs usually look like: images.unsplash.com/photo-1234567890-abcdef123456
        const regex = /https:\/\/images\.unsplash\.com\/(photo-\d{10,13}-[a-f0-9]{12})/g;
        let match;
        const ids = new Set();
        while ((match = regex.exec(data)) !== null) {
          ids.add(match[1]);
          if(ids.size >= 5) break;
        }
        console.log(`--- ${query} ---`);
        console.log(Array.from(ids).join('\n'));
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  await searchUnsplash('kedarnath');
  await searchUnsplash('manali');
  await searchUnsplash('himalayas');
  await searchUnsplash('ayodhya');
  await searchUnsplash('nepal');
}

run();
