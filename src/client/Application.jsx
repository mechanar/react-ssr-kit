import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';

const App = props => {
  // TODO: сделать обертку 404
  const { route } = props;
  return <div>{renderRoutes(route.routes)}</div>;
};

export default {
  component: App
};

App.propTypes = {
  route: PropTypes.instanceOf(Object).isRequired
};
