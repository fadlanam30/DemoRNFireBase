import React from 'react'
import { useWindowDimensions, View } from 'react-native'
import { Card, IconButton, Paragraph, Text, Title } from 'react-native-paper'

const LeftBubble = ({ params }) => {
    // const { width } = useWindowDimensions()
    return (
        <View
            style={{
                alignItems: "flex-start",
                margin: 10
            }}>
            <Card.Content
                style={{
                    backgroundColor: "#D9FDD3",
                    borderTopEndRadius: 16,
                    borderBottomEndRadius: 16,
                    borderBottomLeftRadius: 16,
                    padding: 10
                }}>
                <Paragraph>test123</Paragraph>
            </Card.Content>
            <Text
                style={{
                    fontSize: 12,
                    paddingStart: 4
                }}
            >
                12 Jun
            </Text>
        </View>
    )
}

export default LeftBubble