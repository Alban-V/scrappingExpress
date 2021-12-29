
const puppeteer = require('puppeteer');

async function fetchData() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://blog.arcoptimizer.com/comprendre-module-exports-et-exportations-dans-node-js');
};
    
module.exports = fetchData;


