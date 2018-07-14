import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : 
{
  lanes: [],
  notes: []
}

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store;
