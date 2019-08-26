import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { AppLoading } from 'expo'
import { lightPurp } from '../utils/colors'

class DecksOverview extends Component {

    state = {
        ready: false
    }

    componentDidMount() {

        const { dispatch } = this.props

        getDecks()
            .then((decks) => dispatch(receiveDecks(decks)))
            .then(() => this.setState(() => ({ready: true})))

    }


    render() {

        const { decks } = this.props
        const { ready } = this.state
        const { navigate } = this.props.navigation

        let decksArray = Object.keys(decks).map((val) => {
            return {'key': val, ...decks[val]}
        })
    
        if (ready === false) {
          return <AppLoading />

        } else return (
            <View style={styles.container}>
                <FlatList
                    data={decksArray}
                    renderItem={({item}) =>
                        <TouchableOpacity style={styles.item} onPress={() => navigate('SingleDeck', item.title)}>
                            <Text style={styles.header}>{item.title}</Text>
                            <Text style={styles.cardInfo}>Cards: {item.questions.length}</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
      backgroundColor: lightPurp,
      borderRadius: Platform.OS === 'ios' ? 16 : 2,
      paddingTop: 40,
      paddingBottom: 40,
      paddingLeft: 20,
      paddingRight: 20,
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
    header: {
        fontSize: 20,
        textAlign: 'center',
    },
    cardInfo: {
        fontSize: 16,
        marginTop: 4,
        textAlign: 'center',
    }
})

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DecksOverview)