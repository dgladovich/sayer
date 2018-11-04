import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import actions from '../../actions';

const renderInput = ({input: {onChange, ...restInput}}) => {
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

const CreateItem = props => {

    const {handleSubmit} = props;

    return (
        <View style={styles.container}>
            <Field
                name="itemTitle"
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
    form: 'item',
    onSubmit: (values, dispatch)=>{dispatch(actions.addItem({title: values.itemTitle}))},
    validate
})(CreateItem)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        width: '80%'
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
