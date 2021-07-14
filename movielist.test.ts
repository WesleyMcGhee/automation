import { Builder, Capabilities, By } from "selenium-webdriver";

const chromedriver = require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html');

})

// afterAll(async () => {
//     await driver.quit();
// })

test('Add movie', async () => {
    let movieInput = await driver.findElement(By.xpath("//input"))
    await movieInput.sendKeys('Mulan\n');
    await driver.sleep(2000);

})

test('Delete movie', async () => {
    let deleteMovie = await driver.findElement(By.xpath('//button[@id="Mulan"]'))
    await deleteMovie.click();
    await driver.sleep(2000)
})

test('Check to see if message is correct', async () => {
    let movieMessage = await driver.findElement(By.id('message'))
    expect(movieMessage.getText).toBe('Mulan deleted!');
})
