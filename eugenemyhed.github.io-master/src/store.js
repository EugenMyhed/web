import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import galleryReducer from './reducers/galleryReducer'

const reducer = combineReducers({
    form: reduxFormReducer,
    ui: galleryReducer
});



export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

