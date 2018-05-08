import React from 'react';
import {StackNavigator} from 'react-navigation';

import HomeComponent from '../components/HomeComponent';
import SourceDetailsComponent from '../components/SourceDetailsComponent';

export const HomeStack = StackNavigator({
    HomeScreen: {
        screen: HomeComponent
    },
    SourceArticlesScreen: {
        screen: SourceDetailsComponent
    }
}, {initialRouteName: 'HomeScreen'});