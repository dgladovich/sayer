import React from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import {di} from 'redux';
import {Field, reduxForm} from 'redux-form';

import CreateItemForm from '../forms/CreateItemForm';



export default class CreateItem extends React.Component {
    static navigationOptions = {
        title: 'Create new item',
    };


    render() {
        const {navigation} = this.props;
        return (
            <CreateItemForm navigation={navigation}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
