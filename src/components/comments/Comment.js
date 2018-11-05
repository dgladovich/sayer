import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class Screen extends React.Component {
    render() {
        const {item} = this.props;
        return (
            <View style={styles.commentBlock}>
                <View style={styles.avatar}/>
                <Text>{item.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    commentBlock: {
        width: '90%',
        textAlign: 'left',
        flex: 1,
        flexDirection: 'row',
    },
    avatar: {
        width: 50,
        height: 50,
        backgroundColor: 'pink',
    }
});
