import React from 'react';
import {createStackNavigator} from 'react-navigation';
import ItemsContainer from '../containers/ItemsContainer';
import CreateItem from '../components/CreateItem';
import CommentsContainer from '../containers/CommentsContainer';


export default createStackNavigator(
    {
        Home: {
            screen: ItemsContainer
        },
        Create: {
            screen: CreateItem
        },
        Item: {
            screen: CommentsContainer
        }
    },
    {
        initialRouteName: 'Home',
    });
