import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import newsReducers from './reducers';

const rootReducers = combineReducers({
    news: newsReducers
});

const configStore = () => {
    return createStore(rootReducers, applyMiddleware(thunk));
};

export default configStore;