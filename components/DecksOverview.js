import React, { Component } from 'react'
import { View, Text } from 'react-native'

class DecksOverview extends Component {

    state = {
        ready: false,
    }

    render() {
        return (
            <View>
                <Text>Decks</Text>
            </View>
        )
    }
}

export default (DecksOverview)