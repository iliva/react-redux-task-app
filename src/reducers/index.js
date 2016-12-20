import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './tasks';
import buttons from './buttons';

const rootReducer = combineReducers({tasks, buttons, routing: routerReducer });

export default rootReducer;
