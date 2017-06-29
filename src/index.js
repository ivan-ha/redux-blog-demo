import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducer from './reducers';
import PostsIndex from './components/posts_index';

const store = createStore(reducer, applyMiddleware(ReduxPromise));

const AppContainter = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Route path="/" component={PostsIndex} />
                </div>
            </BrowserRouter>
        </Provider>
    );
};

ReactDOM.render(<AppContainter />, document.querySelector('.container'));
