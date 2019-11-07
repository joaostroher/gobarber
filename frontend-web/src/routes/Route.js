import React from 'react';
import PropTypes from 'prop-types';

import { Route as RouteDOM, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function Route({ component: Component, isPrivate, ...rest }) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <RouteDOM
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

Route.propTypes = {
  component: PropTypes.node.isRequired,
  isPrivate: PropTypes.bool,
};

Route.defaultProps = {
  isPrivate: false,
};
