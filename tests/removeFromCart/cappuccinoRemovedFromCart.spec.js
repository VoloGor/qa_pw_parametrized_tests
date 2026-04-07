import { test } from '../_fixtures/fixtures';

test('Check Cappuccino removed from Cart after clicking remove', async ({
  cartPage,
  menuPage,
}) => {
  await menuPage.open();
  await menuPage.clickCoffeeCup('Cappuccino');

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.clickRemoveAllButton('Cappuccino');
  await cartPage.assertNoCoffeeMessageIsVisible();
});
