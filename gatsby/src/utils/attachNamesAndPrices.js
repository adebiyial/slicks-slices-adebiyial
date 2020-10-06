import calculatePizzaPrice from './calculatePizzaPrice';

export default function attachNamesAndPrices(order, pizzas) {
  return order.map((item) => {
    const orderedPizza = pizzas.find((pizza) => pizza.id === item.id);
    return {
      ...item,
      name: orderedPizza.name,
      thumbnail: orderedPizza.image.asset.fluid.src,
      price: calculatePizzaPrice(orderedPizza.price, item.size),
    };
  });
}
