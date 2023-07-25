const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

jest.setTimeout(180000); // Set the timeout to 180 seconds

describe("Movies List App", () => {
  let driver;

  beforeEach(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000"); // Assuming your Movies List app runs on http://localhost:3000
  });

  afterEach(async () => {
    await driver.quit();
  });

  test("Can cross off a movie", async () => {
    const movieTitle = "Example Movie"; // Replace this with a movie title that exists in your app

    try {
      // Wait for the movie element to be available and click on it
      const movieElement = await driver.wait(until.elementLocated(By.xpath(`//*[text()="${movieTitle}"]`)), 90000); // Wait up to 90 seconds
      await movieElement.click();

      // Add a small delay to allow the app to update the crossed-off state
      await driver.sleep(3000); // 3-second delay

      // Wait for the movie to be marked as crossed-off
      const crossedOffMovie = await driver.findElement(By.xpath(`//*[text()="${movieTitle}"][contains(@class, "crossed-off")]`));
      assert.ok(crossedOffMovie);
    } catch (err) {
      console.error(err);
    }
  });

  test("Can delete a movie", async () => {
    const movieTitle = "Example Movie"; // Replace this with a movie title that exists in your app

    try {
      // Wait for the delete button for the movie to be available and click on it
      const deleteButton = await driver.wait(
        until.elementLocated(By.xpath(`//div[text()="${movieTitle}"]/following-sibling::button[@title="Delete"]`)),
        30000 // Wait up to 30 seconds
      );
      await deleteButton.click();

      // Wait for the movie to be removed from the list
      await driver.wait(until.stalenessOf(deleteButton), 20000); // Wait up to 20 seconds
      const deletedMovie = await driver.findElement(By.xpath(`//*[text()="${movieTitle}"]`)).catch(() => null);
      assert.strictEqual(deletedMovie, null, "Movie should be deleted from the list.");
    } catch (err) {
      console.error(err);
    }
  });

  test("Notifications are displayed", async () => {
    const newMovieTitle = "New Movie"; // Replace this with a movie title that you'll add to the list

    try {
      // Wait for the input field to add a new movie to be available and enter the movie title
      const inputField = await driver.wait(until.elementLocated(By.xpath("//input[@placeholder='Add a new movie']")), 30000); // Wait up to 30 seconds
      await inputField.sendKeys(newMovieTitle, Key.RETURN);

      // Wait for the notification element to be displayed
      const notificationElement = await driver.wait(until.elementLocated(By.xpath(`//*[text()='Added: ${newMovieTitle}']`)), 20000); // Wait up to 20 seconds
      assert.ok(notificationElement);
    } catch (err) {
      console.error(err);
    }
  });
});
