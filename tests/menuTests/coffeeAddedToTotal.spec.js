import { test } from '../_fixtures/fixtures';
import { totalPriceFormatStr } from '../../src/common/priceFormatters';
import { COFFEE_PRICES } from '../../src/constants';

const testParameters = [
  {
    title: 'Cappuccino',
    price: COFFEE_PRICES.cappuccino,
    click: (menuPage) => menuPage.clickCoffeeCup('Cappuccino'),
  },
  {
    title: 'Espresso',
    price: COFFEE_PRICES.espresso,
    click: (menuPage) => menuPage.clickCoffeeCup('Espresso'),
  },
];

testParameters.forEach(({ price, title, click }) => {
  test(`Check ${title} cost is added to Total on menu page`, async ({
    menuPage,
  }) => {
  const totalPriceStr = totalPriceFormatStr(price);

  await menuPage.open();
  await click(menuPage);

  await menuPage.assertTotalCheckoutContainsValue(totalPriceStr);
  });
});