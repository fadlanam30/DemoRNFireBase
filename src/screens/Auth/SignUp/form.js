import { View, Text } from 'react-native'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import TextInputField from '../../../components/TextInputField'
import Spacer from '../../../components/Spacer'
import { ActivityIndicator, Button } from 'react-native-paper'
import validationSchema from './validationSchema'

const Form = ({
    initialValues,
    onSignUp,
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
                name="name"
                label="Name"
                autoCapitalize='none'
                autoCorrect={false}
                control={control}
            />
            <Spacer height={16} />
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
            <Spacer height={16} />
            <TextInputField
                name="confirm_password"
                label="Confirm Password"
                secureTextEntry
                control={control}
            />
            <Spacer height={48} />
            {isLoading
                ? <ActivityIndicator
                    animating
                />
                : <Button
                    mode="contained-tonal"
                    onPress={handleSubmit(onSignUp)}
                >
                    SignUp
                </Button>
            }
            <Spacer height={12} />
            <Text style={{ textAlign: 'center' }}>
                Or you want to <Text style={{ color: 'red' }} onPress={() => navigation.navigate('SignInScreen')}>SignIn</Text>
            </Text>

        </View>
    )
}

export default Form