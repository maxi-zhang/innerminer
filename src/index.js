import React from 'react';
import ReactDOM from 'react-dom';
import BasicRoute from "./Router";
import store from "./store"
import {Provider} from 'react-redux'
import 'antd/dist/antd.css';
import "./common/sass/global.scss"

ReactDOM.render(
    <Provider store={store}>
        <BasicRoute/>
    </Provider>,
    document.getElementById('root')
);
