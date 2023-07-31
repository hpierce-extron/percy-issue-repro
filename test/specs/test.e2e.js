const percySnapshot = require('@percy/webdriverio');

describe('Google', () => {
    it('Open Google.com', async () => {
        await browser.url('');
        const element = $('body > div.L3eUgb > div.o3j99.LLD4me.yr19Zb.LS8OJ > div > img');
        await expect(element).toBeDisplayed();
        await percySnapshot('Snapshot 1');
    })
})
