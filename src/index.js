import React from 'react';
import {render} from 'react-dom';
import App from './App';
/* Import Redux store and the actions */
import configureStore from './store/configureStore';
import {toggleContactForm, handleInputChange} from './actions';

const store = configureStore();

//Note that subscribe() returns a function for unregistering the listener

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

/* returns isContactFormHidden returns false */
store.dispatch(toggleContactForm());
/* returns isContactFormHidden returns false */
store.dispatch(toggleContactForm());

/* updates the state of contacts.newContact object */
store.dispatch(handleInputChange('email', 'manjunath@example.com'))

unsubscribe();
