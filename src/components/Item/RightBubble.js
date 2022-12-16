import React from 'react'
import { View } from 'react-native'
import { Card, Paragraph, Text, Title } from 'react-native-paper'

const RightBubble = ({ params }) => {
    return (
        <View
            style={{
                alignItems: "flex-end",
                margin: 10,

            }}
        >
            <Card.Content
                style={{
                    backgroundColor: "#7fffd4",
                    borderTopStartRadius: 16,
                    borderBottomEndRadius: 16,
                    borderBottomLeftRadius: 16,
                    padding: 10
                }}
            >
                <Paragraph>
                    test1ssasasa23
                </Paragraph>
            </Card.Content>
            <Text
                style={{
                    fontSize: 12,
                    paddingEnd: 4
                }}
            >
                12 Jun
            </Text>
        </View>
    )
}

export default RightBubble