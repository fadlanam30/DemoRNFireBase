import React from 'react'
import { Avatar, Card } from 'react-native-paper'

const InboxItem = ({ inbox }) => {
    return (
        <Card.Title
            title={inbox.username}
            subtitle={inbox.lastMessage}
            left={(props) => <Avatar.Icon {...props} icon="account" />}
        />
    )
}

export default InboxItem