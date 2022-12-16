import React from 'react'
import { TouchableOpacity, Vi, View } from 'react-native'
import { Card, IconButton } from 'react-native-paper'

const UserItem = ({ user, isSelected, onPress }) => {
    return (
        <View style={{ shadowOpacity:2 }}>
            <TouchableOpacity onPress={onPress}>
                <Card
                    mode="elevated"
                    style={{
                        borderRadius: 16,
                        margin: 8,
                    }}
                    onPress={onPress}>

                    <Card.Title
                        title={user.name}
                        titleVariant="titleLarge"
                        subtitle={user.email}
                        subtitleVariant="bodyMedium"
                        right={() => isSelected && (
                            <IconButton icon="check" />
                        )
                        }
                    />
                </Card>
            </TouchableOpacity>
        </View>
    )
}

export default UserItem