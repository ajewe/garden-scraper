const puppeteer = require('puppeteer');

const basicPlantAndSpacingScrape = (async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let dataRows = [];

  try {
    await page.goto('https://gardeninminutes.com/plant-spacing-chart-raised-bed-gardening/#:~:text=With%203%20inch%20seed%2Fplant,a%201%20square%20foot%20area.');

    const dataFromPage = await page.evaluate(() => {
      const tds = Array.from(document.querySelectorAll('table tr td'))
      return tds.map( td => td.innerText);
    })

    const arrangeData = () => {
      for (let i = 0; i < dataFromPage.length; i+=2) {
        dataRows.push([dataFromPage[i], dataFromPage[i + 1]])
      }
      return dataRows
    };
  } catch(e) {
    console.log(e)
  }
  await browser.close()
  return dataRows;
})();

module.exports = basicPlantAndSpacingScrape;