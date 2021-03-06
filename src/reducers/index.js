import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import ui from './ui';
import fishkind from './fishkind';
import fishInfo from './fishInfo';
import intl from './intl';

export default combineReducers({
  routing,
  ui,
  fishkind,
  intl,
  fishInfo,
});
