
import React from 'react';
import ReactDOM from 'react-dom';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import reducers from './reducers';
import BookList from './components/pages/bookList';

import {postBooks, deleteBooks, updateBooks} from './actions/bookActions';
import {addToCart} from './actions/cartActions.js';

ReactDOM.render(<BookList />, document.getElementById('root'));

// STEP1 : Create Store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

store.subscribe(function() {
	console.log('current state is :', store.getState());
})

// STEP2 : Create and dispatch action
store.dispatch(postBooks(
	[
		{
    		id: 1,
    		title:'this is the book title',
    		description: 'this is the book',
    		price: 33.33
		}, 
		{
			id: 2,
			title:'this is the second book title',
			description: 'this is the second book',
    		price: 50
		},
		{
			id: 3,
			title:'this is the third book title',
			description: 'this is the third book',
    		price: 60
		}
	]
));

store.dispatch(deleteBooks({ id: 2 }));

store.dispatch(updateBooks({
	id: 3,
    title: 'Harry Potter'
}));

store.dispatch(postBooks(
	[
		{
    		id: 4,
    		title:'this is the fourth book title',
    		description: 'this is the book',
    		price: 23.33
		}
	]
));

store.dispatch(addToCart({id: 4}));