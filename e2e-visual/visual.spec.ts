import { join } from 'path';
import { Browser, By, snapshotViewPort } from '@progress/kendo-e2e';

let browser: Browser;

beforeAll(() => {
  browser = new Browser();
});

beforeEach(async () => {
  await browser.navigateTo('http://localhost:4200/');
});

afterAll(async () => {
  await browser.close();
});

it('should look properly', async () => {
  const path = join(__dirname, './snapshots/home.png');
  const options = { hideSelectors: ['#rocket'], tolerance: 0.01, timeout: 10000 };
  await snapshotViewPort(browser.driver, path, options)
});
