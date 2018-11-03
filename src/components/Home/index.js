import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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


export default class Screen extends React.Component {

    componentDidMount() {
        this.props.navigation.addListener('didFocus', this._loadItems)
    }
    componentWillUnmount(){
        this.props.navigation.removeListener('didFocus');
    }

    _loadItems = () => {
        console.log('we are loading items here')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to Sayer app</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Create')}
                />
            </View>
        )
    }
}

