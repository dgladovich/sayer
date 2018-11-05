import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, Dimensions} from 'react-native';
import Swipeable from 'react-native-swipeable';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const commentDiameter = width * 0.12;
const paddingValue = height * 0.12 / 2;
const deleteButtonWidth = width * 0.3;

export default class Item extends React.Component {

    deleteItem = () => {
        this.props.deleteItem(this.props.item.id)
    };
    rightButtons = [
        <TouchableOpacity onPress={this.deleteItem} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
    ];

    componentWillUnmount() {
        this.props.onClose();
    }

    render() {
        const {item, navigation} = this.props;

        return (
            <Swipeable
                rightButtons={this.rightButtons}
                rightButtonWidth={deleteButtonWidth}
                onRightButtonsOpenRelease={this.props.onOpen}
                onRightButtonsCloseRelease={this.props.onClose}
            >
                <TouchableOpacity style={styles.item}
                                  onPress={() => navigation.navigate('Item', {id: item.id, title: item.title})}>
                    <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                    <Text style={styles.comments}>{item.comments_count}</Text>
                </TouchableOpacity>
            </Swipeable>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: paddingValue,
        paddingTop: paddingValue,
        paddingLeft: '10%',
        paddingRight: '10%',
        borderBottomColor: '#d9d9d9',
        borderBottomWidth: 1
    },
    comments: {
        fontSize: 30,
        color: '#fff',
        backgroundColor: '#313464',
        height: commentDiameter,
        lineHeight: commentDiameter,
        width: commentDiameter,
        borderRadius: commentDiameter / 2,
        textAlign: 'center',
        alignSelf: 'center',
    },
    title: {
        color: '#2b2f3e',
        fontSize: 30
    },
    deleteButton: {
        backgroundColor: '#d4145a',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        paddingBottom: paddingValue,
        paddingTop: paddingValue,
    },
    deleteButtonText: {
        fontSize: 30,
        paddingLeft: 10,
        color: '#fff'

    }
});


