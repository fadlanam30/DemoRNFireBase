import { View, FlatList } from 'react-native'
import React from 'react'
import { useNavigation, useTheme } from '@react-navigation/native'
import { Appbar, IconButton, TextInput } from 'react-native-paper'
import LeftBubble from '../../components/Item/LeftBubble'
import RightBubble from '../../components/Item/RightBubble'

const RoomChatDetail = ({
    userName,
    message,
    setMessage,
    onSubmitChat
}) => {
    const navigation = useNavigation()
    const theme = useTheme()

    return (
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Appbar.Header style={{ backgroundColor: theme.colors.primaryContainer }}>
                <Appbar.BackAction onPress={navigation.goBack} />
                <Appbar.Content title={userName} titleStyle />
            </Appbar.Header>
            <FlatList
                data={[0, 1, 2, 3, 6, 7, 9]}
                // keyExtractor={(item) => item.id}
                renderItem={
                    ({ item }) => item % 2 === 0 ? <LeftBubble /> : <RightBubble />
                }
            />
            <View
                style={{
                    flexDirection: "row",
                    backgroundColor: theme.colors.primaryContainer
                }}
            >
                <TextInput
                    placeholder='Type message'
                    value={message}
                    onChangeText={text => setMessage(text)}
                    style={{ flex: 1 }}
                />
                <IconButton
                    icon="send"
                    onPress={onSubmitChat}
                />
            </View>
        </View>
    )
}

export default RoomChatDetail