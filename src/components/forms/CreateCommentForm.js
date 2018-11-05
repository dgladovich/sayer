import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import {Field, reduxForm} from 'redux-form';

import SubmitButton from '../buttons/SubmitButton';

const renderInput = ({input: {onChange, ...restInput}}) => {
    return <TextInput style={styles.input} onChangeText={onChange} {...restInput} blurOnSubmit={false}/>
};

const validate = (values, next) => {

    console.log(values, next);
    const error = {};

    if(!values){
        return error;
    }
    error.title = '';



    if (values.length < 3) {
        error.title = 'too short';
    }

    return {} ;
};

const CreateComment = props => {
    const {handleSubmit} = props;
    return (
        <View style={styles.container}>
            <Field
                name="commentText"
                component={renderInput}
                type="text"
            />
            <SubmitButton
                disabled={false}
                keyboardShouldPersistTaps="always"
                keyboardDismissMode="on-drag"
                onPress={handleSubmit}
            />
        </View>
    )
};


export default reduxForm({
    form: 'comment',
})(CreateComment)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#e6e6e6',
        padding: 7,
        paddingLeft: 7,
        paddingRight: 15
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
        width: '80%',
        backgroundColor: '#fff',
        fontSize: 20,
        borderWidth: 1,
        borderColor: '#cccccc',
        paddingLeft: 15
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
