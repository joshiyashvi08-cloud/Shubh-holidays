const https = require('https');

function getUnsplashIds(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=5`, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.results && json.results.length > 0) {
            console.log(`--- ${query} ---`);
            json.results.forEach(img => {
              console.log(img.id);
            });
          }
        } catch(e) {
          console.error(e);
        }
        resolve();
      });
    }).on('error', resolve);
  });
}

async function run() {
  await getUnsplashIds('kedarnath');
  await getUnsplashIds('manali');
  await getUnsplashIds('himalayas');
  await getUnsplashIds('nepal');
  await getUnsplashIds('ayodhya');
  await getUnsplashIds('shimla');
}

run();
