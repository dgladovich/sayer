import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';

import Comment from './Comment';

export default class Screen extends React.Component {
    render() {
        const {comments} = this.props;
        return (
            <ScrollView>
                {
                    comments.map( comment => {
                        return (
                            <Comment key={comment.id} item={comment}/>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
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
