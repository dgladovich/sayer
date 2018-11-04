import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import {Field, reduxForm} from 'redux-form';

const renderInput = ({ input: { onChange, ...restInput }}) => {
    return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
};

const validate = values => {
    const error = {};
    error.title = '';
    let title = values.title;

    if (values.title === undefined) {
        title = '';
    }

    if (title.length < 8 && title !== '') {
        error.title = 'too short';
    }


    return error;
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
            <Button
                title="Create"
                onPress={handleSubmit}
            />
        </View>
    )
};


export default reduxForm({
    form: 'comment',
    validate
})(CreateComment)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input: {
      width: '80%'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
