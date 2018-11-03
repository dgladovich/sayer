import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, ScrollView} from 'react-native';

import Item from '../Item'

const mocks = [
    {title: 'Title1', comments_count: 1},
    {title: 'Title2', comments_count: 3},
    {title: 'Title3', comments_count: 5},
    {title: 'Title1', comments_count: 1},
    {title: 'Title2', comments_count: 3},
    {title: 'Title3', comments_count: 5},
    {title: 'Title1', comments_count: 1},
    {title: 'Title2', comments_count: 3},
    {title: 'Title3', comments_count: 5},
    {title: 'Title1', comments_count: 1},
    {title: 'Title2', comments_count: 3},
    {title: 'Title3', comments_count: 5},
];
 

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
    }

    render() {
        const {currentlyOpenSwipeable} = this.state;
        const {navigation} = this.props;

        const itemProps = {
            onOpen: (event, gestureState, swipeable) => {
                if (currentlyOpenSwipeable && currentlyOpenSwipeable !== swipeable) {
                    currentlyOpenSwipeable.recenter();
                }

                this.setState({currentlyOpenSwipeable: swipeable});
            },
            onClose: () => this.setState({currentlyOpenSwipeable: null}),
            navigation

        };
        return (
            <ScrollView style={styles.container} onScroll={this.handleScroll}>
                {
                    mocks.map((item, i) => {
                        return (
                            <Item key={i} item={item} {...itemProps}/>
                        )
                    })
                }
                <Button
                    title="Go to Details"
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
