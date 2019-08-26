import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { lightPurp } from '../utils/colors'

class SingleDeck extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text>Single Deck</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightPurp,
    }
})

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(SingleDeck)