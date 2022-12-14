import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import Form from './form';

const SignInScreen = ({ navigation }) => {

    const theme = useTheme()

    const initialValues = {
        email: '',
        password: '',
    }

    const [isLoading, setLoading] = useState(false)

    const onSignIn = (values) => {
        setLoading(true)
        auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(() => {
                navigation.replace('HomeScreen')
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
                <Appbar.Content title="Sign In" />
            </Appbar.Header>
            <View style={{ paddingHorizontal: 24, paddingTop: 32}}>
                <Form
                    initialValues={initialValues}
                    onSignIn={onSignIn}
                    isLoading={isLoading}
                    navigation={navigation}
                />
            </View>
        </View>
    )
}

export default SignInScreen