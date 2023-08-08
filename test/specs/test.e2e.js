// const percySnapshot = require('@percy/webdriverio');
const { percyScreenshot } = require('@percy/selenium-webdriver');

describe('WebdriverIO', () => {
    it('Open webdriver.io', async () => {
        await browser.url('');
        const element = await $('#docusaurus_skipToContent_fallback > header > div > div.buttons_pzbO > a:nth-child(1)');
        await expect(element).toBeDisplayed();
        // await percySnapshot('Snapshot 1');
        await percyScreenshot(browser, 'screenshot_1');
    })
})
