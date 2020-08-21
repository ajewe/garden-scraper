const { writeToPath } = require('@fast-csv/format');
const path = require('path');
const basicPlantAndSpacingScrape = require("./garden-scraper")

basicPlantAndSpacingScrape.then((res) => {
  const rows = res

  writeToPath(path.resolve(__dirname, './data/plantData.csv'), rows)
  .on('error', err => console.error(err))
  .on('finish', () => console.log(rows, 'Done writing.'));
})