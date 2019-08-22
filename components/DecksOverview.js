import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'

const white = '#fff'

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

        const { decks } = this.props

        let decksArray = Object.keys(decks).map((val) => {
            return {'key': val, ...decks[val]}
        })

        return (
            <View>
                <FlatList
                    data={decksArray}
                    renderItem={({item}) =>
                        <TouchableOpacity style={styles.item}>
                            <Text>{item.title}</Text>
                            <Text>Cards: {item.questions.length}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
      backgroundColor: white,
      borderRadius: Platform.OS === 'ios' ? 16 : 2,
      padding: 20,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 17,
      justifyContent: 'center',
      shadowRadius: 3,
      shadowOpacity: 0.8,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
    },
    noDataText: {
      fontSize: 20,
      paddingTop: 20,
      paddingBottom: 20
    }
})

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DecksOverview)