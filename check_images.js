const fs = require('fs');
const https = require('https');

const files = [
  './src/components/Destinations.jsx',
  './src/pages/DestinationDetails.jsx'
];

let urls = new Set();

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/https:\/\/images\.unsplash\.com\/[^\s'"]+/g);
  if (matches) {
    matches.forEach(url => urls.add(url));
  }
});

const urlArray = Array.from(urls);

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode >= 400) {
        console.log(`BROKEN: [${res.statusCode}] ${url}`);
      }
      resolve();
    }).on('error', (e) => {
      console.log(`ERROR: ${url} - ${e.message}`);
      resolve();
    });
  });
}

async function run() {
  console.log(`Checking ${urlArray.length} URLs...`);
  for (const url of urlArray) {
    await checkUrl(url);
  }
  console.log('Done.');
}

run();
