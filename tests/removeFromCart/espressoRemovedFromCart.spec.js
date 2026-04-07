import { test } from '../_fixtures/fixtures';

test('Check Espresso removed from Cart after clicking remove', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCoffeeCup('Espresso');

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickRemoveAllButton('Espresso');
  await cartPage.assertNoCoffeeMessageIsVisible();
});
