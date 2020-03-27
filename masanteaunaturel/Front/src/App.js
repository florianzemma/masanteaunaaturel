import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import displayPracticien from './Reducers/display.reducer'
import favList from './Reducers/favList.reducer'

import NavBar from './components/Screens/NavBar'
import Navigation from './components/Screens/Navigation'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(combineReducers({displayPracticien,favList}))

function App() {
  return (
    <Provider store={store}>
      <Navigation>
        <NavBar/>
      </Navigation>
    </Provider>
  );
}

export default App;
