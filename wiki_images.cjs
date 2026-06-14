const https = require('https');

function getWikiImage(title) {
  return new Promise((resolve) => {
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=1200`;
    https.get(url, { headers: { 'User-Agent': 'NodeJS/14' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pages[pageId].thumbnail) {
            console.log(`--- ${title} ---`);
            console.log(pages[pageId].thumbnail.source);
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
  await getWikiImage('Kedarnath_Temple');
  await getWikiImage('Manali,_Himachal_Pradesh');
  await getWikiImage('Char_Dham');
  await getWikiImage('Ayodhya');
  await getWikiImage('Himachal_Pradesh');
  await getWikiImage('Kasol');
  await getWikiImage('Shimla');
}

run();
