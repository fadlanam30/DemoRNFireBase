import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { ActivityIndicator, Appbar, FAB, useTheme } from 'react-native-paper'
import InboxItem from '../../components/InboxItem'

const HomeDetail = ({
    user,
    inboxes,
    isLoading,
    onSignOut,
    onAddButton,
}) => {
    const theme = useTheme()

    console.log('inboxess', inboxes)

    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: theme.colors.primaryContainer }}>
                <Appbar.Content title="Home" />
                <Appbar.Action
                    icon='logout'
                    onPress={onSignOut}
                />
            </Appbar.Header>

            {isLoading
                ? <ActivityIndicator
                    size='large'
                    style={{
                        flex: 1,
                        alignContent: 'center',
                        justifyContent: 'center'
                    }}
                    animating
                />
                : <FlatList
                    data={inboxes || []}
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
                                Hello {user.name} There is no inbox arround here..
                            </Text>
                            
                        </View>
                    )}
                    renderItem={
                        ({ item }) => (
                            <InboxItem inbox={item} />
                        )
                    }
                />
            }
            <FAB
                icon="plus"
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 0,
                }}
                onPress={onAddButton}
            />
        </View>
    )
}

export default HomeDetail