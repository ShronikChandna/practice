import { createStore ,applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';
import EpReducer from './episodes/EpReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(EpReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;

