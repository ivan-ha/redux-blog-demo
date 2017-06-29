import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import reducer from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const store = createStore(reducer, applyMiddleware(ReduxPromise));

const AppContainter = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/posts/new" component={PostsNew} />
                    <Route path="/" component={PostsIndex} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

ReactDOM.render(<AppContainter />, document.querySelector('.container'));
