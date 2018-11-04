import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';

import Item from '../Item'
import actions from '../../actions';


export default class Screen extends React.Component {
    static navigationOptions = {
        title: 'Sayer',
    };
    state = {
        currentlyOpenSwipeable: null
    };

    handleScroll = () => {
        const {currentlyOpenSwipeable} = this.state;

        if (currentlyOpenSwipeable) {
            currentlyOpenSwipeable.recenter();
        }
    };

    componentDidMount() {
        this.props.navigation.addListener('didFocus', this._loadItems)
    }

    componentWillUnmount() {
        this.props.navigation.removeListener('didFocus');
    }

    _loadItems = () => {
        const {dispatch, fetchItems} = this.props;
        dispatch(fetchItems());
    };

    render() {
        const {currentlyOpenSwipeable} = this.state;
        const {navigation, items, dispatch} = this.props;

        const itemProps = {
            onOpen: (event, gestureState, swipeable) => {
                if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
                    currentlyOpenSwipeable.recenter();
                }

                this.setState({currentlyOpenSwipeable: swipeable});
            },
            onClose: () => this.setState({currentlyOpenSwipeable: null}),
            deleteItem: itemId => { dispatch(actions.deleteItem(itemId)) },
            navigation,
            dispatch

        };
        return (
            <ScrollView style={styles.container} onScroll={this.handleScroll}>
                {
                    items.map((item) => {
                        return (
                            <Item key={item.id} item={item} {...itemProps}/>
                        )
                    })
                }
                <Button
                    title="Create item"
                    onPress={() => this.props.navigation.navigate('Create')}
                />
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
