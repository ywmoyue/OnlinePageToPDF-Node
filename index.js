const puppeteer = require("puppeteer");
const argv = require('yargs').argv;

const waitTime = argv.waitTime ? argv.waitTime : 10000;
const pageUrl = argv.pageUrl ? argv.pageUrl : null;
const pdfFilePath = argv.pdfFilePath ? argv.pdfFilePath : "test.pdf"
if (pageUrl === null) {
  throw new Error("need a pageUrl")
}

async function saveWebpageAsPdf(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await sleepAsync(waitTime);
  await page.pdf({ path: pdfFilePath, format: "A4", margin: { top: "1cm", bottom: "1cm" } });
  await browser.close();
}

function sleepAsync(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

saveWebpageAsPdf(`${pageUrl}`);
