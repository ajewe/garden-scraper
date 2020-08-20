const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://gardeninminutes.com/plant-spacing-chart-raised-bed-gardening/#:~:text=With%203%20inch%20seed%2Fplant,a%201%20square%20foot%20area.');

  const data = await page.evaluate(() => {
    const tds = Array.from(document.querySelectorAll('table tr td'))
    return tds.map( td => td.innerText)
  })
  console.log(data)

  await browser.close()
})();