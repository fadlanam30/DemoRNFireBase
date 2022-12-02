import { View, Text } from 'react-native'
import React from 'react'
import { Appbar, Button, useTheme } from 'react-native-paper'
import auth from '@react-native-firebase/auth';

const HomeScreen = ({ navigation }) => {

    const theme = useTheme()

    const onSignOut = () => {
        auth().signOut().then(() => navigation.replace('SignInScreen'))
    }

    return (
        <View
            style={{ flex: 1 }}
        >
            <Appbar.Header
                style={{ backgroundColor: theme.colors.primaryContainer }}
            >
                <Appbar.Content title="Home" />
            </Appbar.Header>
            <View style={{ paddingHorizontal: 24, paddingTop: 32 }}>
                <Button
                    mode='contained-tonal'
                    onPress={onSignOut}
                >
                    Sign Out
                </Button>
            </View>
        </View>
    )
}

export default HomeScreen