import { View } from 'react-native'
import React from 'react'
import TextInputField from '../../../components/TextInputField';
import Spacer from '../../../components/Spacer';
import { ActivityIndicator, Button, Text } from 'react-native-paper'

import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from './validationSchema';

const Form = ({
    initialValues,
    onSignIn,
    isLoading,
    navigation
}) => {

    const form = useForm({
        mode: 'all',
        defaultValues: initialValues,
        resolver: yupResolver(validationSchema)
    })

    const { control, handleSubmit } = form

    return (
        <View>
            <TextInputField
                name="email"
                label="Email"
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
                control={control}
            />
            <Spacer height={16} />
            <TextInputField
                name="password"
                label="Password"
                secureTextEntry
                control={control}
            />
            <Spacer height={40} />
            {isLoading
                ? <ActivityIndicator
                    animating
                />
                : <Button
                    mode="contained-tonal"
                    onPress={handleSubmit(onSignIn)}
                >
                    SignIn
                </Button>
            }
            <Spacer height={12} />
            <Text style={{ textAlign: 'center' }}>
                Or you want to <Text style={{ color: 'red' }} onPress={() => navigation.navigate('SignUpScreen')}>SignUp</Text>
            </Text>
        </View>
    )
}

export default Form