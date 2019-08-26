import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { connect } from 'react-redux'
import { lightBlue } from '../utils/colors'

class SingleDeck extends Component {

    render() {
        const title = this.props.navigation.state.params
        const questions = this.props.state[title].questions

        return (
            <View style={styles.container}>
                <Text style={styles.header}>{title}</Text>
                <Text style={styles.cardInfo}>Cards: {questions.length}</Text>
                <TouchableOpacity style={styles.item}>
                    <Text style={{textAlign: 'center'}}>
                        Add Card
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <Text style={{textAlign: 'center'}}>
                        Start Quiz
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
    },
    item: {
        backgroundColor: lightBlue,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 60,
        marginRight: 60,
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
        fontSize: 30,
        textAlign: 'center',
    },
    cardInfo: {
        fontSize: 16,
        marginTop: 4,
        marginBottom: 20,
        textAlign: 'center',
    }
})

function mapStateToProps (state) {
    
    return {
        state
    }

}

export default connect(mapStateToProps)(SingleDeck)