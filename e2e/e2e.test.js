/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import puppeteer from 'puppeteer';
import server from './e2e.server';

jest.setTimeout(30000); // default puppeteer timeout

describe('p2p test', () => {
  const baseUrl = 'http://localhost:8888';

  let browser = null;
  let page = null;

  beforeAll(async () => {
    await server.start(); // запуск сервера

    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 100, // скорость
      devtools: false, // show devTools
      args: ['--window-size=640,1080'],
      defaultViewport: {
        width: 640,
        height: 1080,
      },
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close(); // закрытие браузера
    await server.stop(); // остановка сервера
  });

  test('test taskOne Popovers', async () => {
    await page.goto(baseUrl); // переход на страницу

    const taskOne = await page.$('[data-id=taskOne]');

    await taskOne.click();

    await page.waitForSelector('.has-tooltip')
      .then(() => console.log('has-tooltip true'))
      .catch(() => console.log('has-tooltip error'));

    const hasTooltip = await page.$$('.has-tooltip');

    for (let i = 0; i < hasTooltip.length; i += 1) {
      await hasTooltip[i].click();
      await hasTooltip[i].waitForSelector('.tooltip')
        .then(() => console.log('true'))
        .catch(() => console.log('error'));
    }
  });
});
