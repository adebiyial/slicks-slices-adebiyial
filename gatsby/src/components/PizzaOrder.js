import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, index) => {
        const orderedPizza = pizzas.find(
          (pizza) => pizza.id === singleOrder.id
        );
        return (
          <MenuItemStyles key={index}>
            <Img
              fluid={orderedPizza.image.asset.fluid}
              alt={orderedPizza.name}
            />
            <h2>{orderedPizza.name}</h2>
            <p>
              {formatMoney(
                calculatePizzaPrice(orderedPizza.price, singleOrder.size)
              )}
            </p>
            <button
              type="button"
              className="remove"
              title={`Remove ${singleOrder.size} ${orderedPizza.name} from order`}
              onClick={() => removeFromOrder(index)}
            >
              &times;
            </button>
          </MenuItemStyles>
        );
      })}
    </>
  );
}

PizzaOrder.propTypes = {
  order: PropTypes.array,
  pizzas: PropTypes.array,
  removeFromOrder: PropTypes.func,
};
