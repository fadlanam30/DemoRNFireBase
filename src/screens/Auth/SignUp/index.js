import { View, Alert } from 'react-native'
import React, { useState } from 'react'
import { Appbar, useTheme } from 'react-native-paper';

import auth from '@react-native-firebase/auth'
import fireRDB from '../../../data/RDBFirebase'
import Form from './form';

const SignUpScreen = ({ navigation }) => {

    const theme = useTheme()

    const initialValues = {
        name: '',
        email: '',
        password: '',
    }

    const [isLoading, setLoading] = useState(false)

    const onSignUp = (values) => {
        setLoading(true)
        auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .then((res) => {
                fireRDB
                    .ref(`/users/${res.user.uid}`)
                    .set({
                        name: values.name,
                        email: res.user.email,
                    })
                    .then(() => {
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'HomeScreen' }]
                        })
                    })
                    .catch(error => {
                        Alert.alert(error.message)
                    })
            })
            .catch(error => {
                let message = 'Unknown Error'
                if (error.code === 'auth/email-already-in-use') {
                    message = 'That email address is already in use!'
                }

                if (error.code === 'auth/invalid-email') {
                    message = 'That email address is invalid!'
                }

                Alert.alert(message)
                console.error(error);
            })
            .finally(() => setLoading(false))
    }

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: theme.colors.primaryContainer }}>
                <Appbar.Content title="Sign Up" />
            </Appbar.Header>
            <View style={{ paddingHorizontal: 24, paddingTop: 32, }}>
                <Form
                    initialValues={initialValues}
                    onSignUp={onSignUp}
                    isLoading={isLoading}
                    navigation={navigation}
                />
            </View>
        </View>
    )
}

export default SignUpScreen