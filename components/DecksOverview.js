import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class DecksOverview extends Component {

    state = {
        ready: false,
    }

    componentDidMount() {

        const { dispatch } = this.props

        getDecks()
            .then((decks) => dispatch(receiveDecks(decks)))
            .then(() => this.setState(() => ({ready: true})))

    }

    render() {
        return (
            <View>
                <Text>{JSON.stringify(this.props.decks)}</Text>
            </View>
        )
    }
}

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DecksOverview)