import { combineReducers } from 'redux';

import { appReducer } from './MainPage';

export default () =>
  combineReducers({
    appReducer
  });
