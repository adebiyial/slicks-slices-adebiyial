import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import PizzaList from '../components/PizzaList';
import SEO from '../components/SEO';
import ToppingsFilter from '../components/ToppingsFilter';

export default function PizzasPage({ data, pageContext }) {
  const { nodes: pizzas } = data.pizzas;

  return (
    <>
      <SEO
        title={
          pageContext.topping
            ? `Pizzas with ${pageContext.topping}`
            : 'All pizzas'
        }
      />
      <ToppingsFilter />
      <PizzaList {...{ pizzas }} />
    </>
  );
}

export const query = graphql`
  query PizzaQuery($id: String) {
    pizzas: allSanityPizza(
      filter: { toppings: { elemMatch: { id: { eq: $id } } } }
    ) {
      nodes {
        name
        price
        id
        slug {
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

PizzasPage.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};
