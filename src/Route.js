
import React, { Component } from 'react';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';

import Home from './component/home/Home';

const HomeStack = StackNavigator({
    Home: { screen: Home, navigationOptions:{ title: null, header: null }},
});

export const AppNavigation =  StackNavigator({
    NavHome:{
        screen: HomeStack
    },
});