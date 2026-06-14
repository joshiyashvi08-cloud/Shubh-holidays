const fs = require('fs');

const files = [
  './src/components/Destinations.jsx',
  './src/pages/DestinationDetails.jsx'
];

const replacements = {
  '1626248281358-8120ed20b226': '1501785888041-af3ef285b470',
  '1596423735880-523c10323ea5': '1503264116251-35a269479413',
  '1565552317300-3fcdae75f923': '1500530855697-b586d89ba3ee',
  '1622308644420-b3118af71691': '1493558103817-58b2924bce98',
  '1605406085603-9d29792019c4': '1500534314209-a25ddb2bd429',
  '1560179406-1c6c60e0faa2': '1470071459604-3b5ec3a7fe05',
  '1593693397690-362cb9666c6b': '1505765052419-2f8f2b3b6a31'
};

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  for (const [broken, fixed] of Object.entries(replacements)) {
    content = content.split(broken).join(fixed);
  }
  fs.writeFileSync(file, content);
  console.log(`Replaced in ${file}`);
});
