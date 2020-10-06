import PropTypes from 'prop-types';
import React from 'react';
import Layout from './src/components/Layout';
import { OrderProvider } from './src/components/OrderContext';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <OrderProvider>{element}</OrderProvider>;
}

wrapPageElement.propTypes = {
  element: PropTypes.any,
  props: PropTypes.any,
};
