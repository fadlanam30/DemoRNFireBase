import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Appbar, Button, useTheme } from 'react-native-paper'
import UserItem from '../../components/Item/UserItem'
import { useNavigation } from '@react-navigation/native'

const CreateChatDetail = ({
    users,
    selectedId,
    onSelectedId,
    onSubmit,
}) => {
    const navigation = useNavigation()
    const theme = useTheme()

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: theme.colors.primaryContainer }}>
                <Appbar.BackAction onPress={navigation.goBack} />
                <Appbar.Content title="Create chat" titleStyle />

            </Appbar.Header>

            <FlatList
                data={users || []}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={() => (
                    <View style={{ flex: 1, paddingHorizontal: 24, paddingTop: 24 }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}
                        >
                            There is no users arround here..
                        </Text>
                    </View>
                )}
                renderItem={
                    ({ item }) => (
                        <UserItem
                            user={item}
                            isSelected={selectedId === item.id}
                            onPress={() => onSelectedId(item.id)}
                        />
                    )
                }
            />
            {!!selectedId &&
                <Button
                    style={{
                        marginBottom: 16,
                        marginHorizontal: 8,
                        padding: 8,
                        backgroundColor: theme.colors.primaryContainer
                    }}
                    onPress={onSubmit}
                >
                    Create a new chat
                </Button>
            }

        </View>
    )
}

export default CreateChatDetail