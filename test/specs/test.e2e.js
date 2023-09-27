import { percyScreenshot } from '@percy/selenium-webdriver';

describe('Extron.com', () => {
    it('Open extron.com', async () => {
        async function freezeMovingElement(selector) {
            await browser.execute((selector) => {
                const element = document.querySelector(selector);
                if (element) {
                    element.style.transition = 'none';
                }
            }, selector);
        }
        
        async function unfreezeMovingElement(selector) {
            await browser.execute((selector) => {
                const element = document.querySelector(selector);
                if (element) {
                    element.style.transition = '';
                }
            }, selector);
        }

        await browser.url('');

        await freezeMovingElement('.carousel-item');
        await freezeMovingElement('.sl-slideshow');

        const element = await $('#user-navigation');
        await expect(element).toBeDisplayed();
        await browser.pause(500);

        await percyScreenshot(browser, 'homepage_1a');

        // unfreezeMovingElement('.carousel-item');
        // unfreezeMovingElement('.sl-slideshow');
    })
})
