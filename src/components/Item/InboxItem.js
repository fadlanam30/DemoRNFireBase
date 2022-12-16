import dayjs from 'dayjs'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Avatar, Card, Text } from 'react-native-paper'

const InboxItem = ({ inbox, onPress }) => {
    return (
        <View style={{ shadowOpacity: 2 }}>
            <TouchableOpacity onPress={onPress}>
                <Card
                    mode="elevated"
                    style={{
                        borderRadius: 16,
                        margin: 8,
                    }}>
                    <Card.Title
                        title={inbox.userName}
                        titleVariant="titleLarge"
                        subtitle={inbox.lastMessage || "No last Message"}
                        subtitleVariant="bodyMedium"
                        left={(props) => (
                            <Avatar.Icon
                                {...props}
                                icon="account"
                            />
                        )}
                        right={(props) => (
                            <Text style={{ textAlignVertical:"bottom", paddingEnd: 12 }}
                                {...props}
                            >
                                {dayjs(inbox.lastMessageAt).format('DD MMM, HH:mm')}
                            </Text>
                        )}
                    />
                </Card>
            </TouchableOpacity>
        </View>
    )
}

export default InboxItem