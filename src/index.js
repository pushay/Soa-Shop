import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import imagePassingReducer from '../src/store/reducers/imagePassing';
import sortPassingReducer from '../src/store/reducers/sortPassing'
import shopAccessingReducer from '../src/store/reducers/shopAccessing'

const rootReducer = combineReducers({
  img:imagePassingReducer,
  sort:sortPassingReducer,
  shop:shopAccessingReducer
})

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}> <App/> </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
