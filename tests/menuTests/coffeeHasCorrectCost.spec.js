import { test } from '../_fixtures/fixtures';
import { priceFormatStr } from '../../src/common/priceFormatters';
import { COFFEE_PRICES } from '../../src/constants';

const testParameters = [
  {
    title: 'Cappuccino',
    price: COFFEE_PRICES.cappuccino,
    assert: (menuPage, priceStr) => menuPage.assertCoffeeCupCostHasValue('Cappuccino', priceStr),
  },
  {
    title: 'Espresso',
    price: COFFEE_PRICES.espresso,
    assert: (menuPage, priceStr) => menuPage.assertCoffeeCupCostHasValue('Espresso', priceStr),
  },
];

testParameters.forEach(({ price, title, assert }) => {
  test(`Check ${title} cup has correct cost`, async ({
    menuPage,
  }) => {
  const priceStr = priceFormatStr(price);

  await menuPage.open();
  await assert(menuPage, priceStr);
  });
});