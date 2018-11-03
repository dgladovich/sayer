import React from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


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
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Item'),
        };
    };
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Item screen</Text>
                <Button
                    title="Create comment"
                    onPress={() => {}}
                />
            </View>
        )
    }
}