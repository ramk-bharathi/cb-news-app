import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import {Provider} from 'react-redux';
import appStore from './src/store/app-store';

const store = appStore();

const NewsApp = () => (
    <Provider store={store}><App/></Provider>
);

AppRegistry.registerComponent('NewsApp', () => NewsApp);
