import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Tou} from 'react-native';
import Swipeable from 'react-native-swipeable';


export default class Item extends React.Component {

    deleteItem = () => {this.props.deleteItem(this.props.item.id)};
    rightButtons = [
        <TouchableOpacity onPress={this.deleteItem} style={styles.deleteButton}>
            <Text>Delete</Text>
        </TouchableOpacity>
    ];

    render() {
        const {item, navigation} = this.props;

        return (
            <Swipeable rightButtons={this.rightButtons}
                       onRightButtonsOpenRelease={this.props.onOpen}
                       onRightButtonsCloseRelease={this.props.onClose}
            >
                <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Item', {id: item.id, title: item.title})}>
                    <Text>{item.title}</Text>
                    <Text>{item.comments_count}</Text>
                </TouchableOpacity>
            </Swipeable>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    deleteButton: {
        backgroundColor: 'red',
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        padding: 20
    }
});


