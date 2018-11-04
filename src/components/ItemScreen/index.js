import React from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, Button} from 'react-native';

import CreateCommentForm from '../forms/CreateCommentForm';
import CommentsList from '../comments/CommentsList';


export default class Screen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('title', 'Item'),
        };
    };
    componentDidMount(){
        const {dispatch, fetchComments, navigation} = this.props;
        console.log(fetchComments({itemID: navigation.state.params.id}))
        dispatch(fetchComments({itemID: navigation.state.params.id}));
    }
    handleSubmit = (values) => {
        const {dispatch, addComment, navigation} = this.props;
        dispatch(addComment({
            parentId: navigation.state.params.id,
            text: values.commentText
        }))
    };

    render() {
        return (
            <View style={styles.container}>
                <CommentsList comments={this.props.comments}/>
                <CreateCommentForm onSubmit={this.handleSubmit}/>
            </View>
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
