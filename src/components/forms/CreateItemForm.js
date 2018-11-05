import React from 'react';
import {StyleSheet, View, Button, TextInput} from 'react-native';
import {Field, reduxForm} from 'redux-form';

import actions from '../../actions';
import SubmitButton from '../buttons/SubmitButton';

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
            <SubmitButton onPress={handleSubmit}/>

        </View>
    )
};


export default reduxForm({
    form: 'item',
    onSubmit: (values, dispatch, props)=>{
        dispatch(actions.addItem({title: values.itemTitle}));
        props.navigation.navigate('Home')
    },
    validate
})(CreateItem)

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        //backgroundColor: '#F5FCFF',
        paddingLeft: 20,
        paddingRight: 20
    },
    input: {
        width: '80%',
        fontSize: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#333333'
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
