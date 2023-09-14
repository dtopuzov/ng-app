import { Browser, By, DriverManager, Settings } from '@progress/kendo-e2e';

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

it('should render rocket', async () => {
  expect(await browser.isVisible(By.id('rocket'))).toBe(true);
});

it('should not throw JS errors in the console', async () => {
  expect(await browser.getErrorLogs()).toEqual([]);
});

it('should not violate accessibility standards', async () => {
  const ignoreRules = [
    'landmark-contentinfo-is-top-level',
    'link-name'
  ];

  const errors = await browser.getAccessibilityViolations('app-root', ignoreRules);
  expect(errors).toEqual([]);
});
