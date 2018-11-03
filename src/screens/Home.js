import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from '../components/Home';
import CreateItem from '../components/CreateItem';
import ItemScreen from '../components/ItemScreen';


export default createStackNavigator(
    {
        Home: {
            screen: Home
        },
        Create: {
            screen: CreateItem
        },
        Item: {
            screen: ItemScreen
        }
    },
    {
        initialRouteName: 'Home',
    });
