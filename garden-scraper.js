const puppeteer = require('puppeteer');

const basicPlantAndSpacingScrape = (async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // let dataObj = {};
  let dataRows = [];

  try {
    await page.goto('https://gardeninminutes.com/plant-spacing-chart-raised-bed-gardening/#:~:text=With%203%20inch%20seed%2Fplant,a%201%20square%20foot%20area.');

    const dataFromPage = await page.evaluate(() => {
      const tds = Array.from(document.querySelectorAll('table tr td'))
      return tds.map( td => td.innerText);
    })

    // let plantNames = [];
    // let plantSpacing = [];
    
    //arrange data into rows, each row an array
    const arrangeData = () => {
      for (let i = 0; i < dataFromPage.length; i+=2) {
        //every even i value in array is plant name, odd i is spacing
        // if (i % 2 === 0) {
        //   plantNames.push(data[i]);
        // } else {
        //   plantSpacing.push(data[i]);
        // }
        dataRows.push([dataFromPage[i], dataFromPage[i + 1]])
      }
      return dataRows
    };
    console.log(arrangeData());
    // dataObj = {
    //   plant: plantNames,
    //   numberOfPlants: plantSpacing,
    // }
  } catch(e) {
    console.log(e)
  }
  await browser.close()
  return dataRows;
})();

module.exports = basicPlantAndSpacingScrape;