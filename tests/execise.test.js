const puppeteer = require('puppeteer');
var assert = require('assert');
const expect = require('chai').expect
describe("PRUEBAS TESTING", () => {

  it(`PRUEBA DE NAVEGADOR`,async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('http://automationpractice.com/index.php');
    //Click add carrito
    await page.waitForTimeout(5000)
    const [button] = await page.$x(`//*[@id="homefeatured"]/li[1]/div/div[2]/div[2]/a[1]/span`);
    button.click()
    //Get product´s cost
    await page.waitForTimeout(5000)
    const [element] = await page.$x(`//*[@id="homefeatured"]/li[1]/div/div[1]/div/div[2]/span`);
    let value = await page.evaluate(el => el.textContent, element)
    console.info(`The first value is: ${value.trim()}`);
    let finalValue = value.trim()
    //Get product´s cost of the car
    await page.waitForTimeout(5000)
    const [info] = await page.$x(`//*[@id="header"]/div[3]/div/div/div[3]/div/div/div/div/dl/dt/div/span`);
    let valueCard = await page.evaluate(el => el.textContent, info)
    console.info(`The Carrito value is: ${valueCard.replace("$", "")}`);
    //validate
    await page.waitForTimeout(5000)
    //assert.equal(valueCard, finalValue, "Incorrect values");
    expect(finalValue).to.be.equal(valueCard)
    await browser.close();
    
  })

})
