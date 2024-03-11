import {legacy_createStore,applyMiddleware,combineReducers} from 'redux';
import {thunk} from "redux-thunk";
import { landingPageReducer } from './LandingPage/landingPageReducer';
import { detailPageReducer } from './DetailsPage/detailPageReducer';
const reducer=combineReducers({
landingPageReducer,detailPageReducer
});

export const store=legacy_createStore(reducer,applyMiddleware(thunk));