const { Builder, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
});

afterAll(async () => {
  await driver.quit();
});

test("can search Google for 'automation'", async () => {
  // Navigate to google.com
  await driver.get("https://www.google.com");

  // Uncomment the line below and replace SEARCH_BAR_NAME with the name of the search bar element
  const SEARCH_BAR_NAME = "q"; // Assuming the name of the search bar is "q"
  await driver.findElement(By.name(SEARCH_BAR_NAME)).sendKeys("automation", Key.RETURN);

  // Wait for the results page to load
  await driver.wait(until.titleIs("automation - Google Search"), 1000);
});

test("can search Google twice", async () => {
  // Navigate to google.com
  await driver.get("https://www.google.com");

  // Search for something in Google and wait for the page to load
  const SEARCH_BAR_NAME = "q"; // Assuming the name of the search bar is "q"
  await driver.findElement(By.name(SEARCH_BAR_NAME)).sendKeys("first search", Key.RETURN);

  await driver.wait(until.titleIs("first search - Google Search"), 1000);

  // Call .clear() on the search bar element to clear the old search term
  await driver.findElement(By.name(SEARCH_BAR_NAME)).clear();

  // Call .sendKeys() on the search bar element to search for a new term
  await driver.findElement(By.name(SEARCH_BAR_NAME)).sendKeys("second search", Key.RETURN);

  // Wait for the results page to load
  await driver.wait(until.titleIs("second search - Google Search"), 1000);
});
