import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { lightPurp, gray, green, red } from '../utils/colors'
import { connect } from 'react-redux'


class Quiz extends Component {

    state = {
        showAnswer: false
    }

    render() {
        const { showAnswer } = this.state
        return(
            <View style={styles.container}>
                {showAnswer === false 
                    ? <View>
                        <Text style={styles.header}>Question</Text>
                        <Text style={styles.showAnswerText} onPress={() => this.setState({showAnswer: true})}>Show Answer</Text>
                      </View>
                    : <View>
                        <Text style={styles.header}>Answer</Text>
                      </View>
                }
                <TouchableOpacity style={[styles.submit, styles.correct]}>
                    <Text style={styles.buttonText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.submit, styles.incorrect]}>
                    <Text style={styles.buttonText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30
    },
    header: {
        fontSize: 40,
        textAlign: 'center',
        marginBottom: 10
    },
    submit: {
        textAlign: 'center',
        marginTop: 25,
        color: lightPurp,
        padding: 10,
        borderColor: gray,
        borderWidth: 1,
        borderRadius: 10,
        width: 150
    },
    correct: {
        backgroundColor: green
    },
    incorrect: {
        backgroundColor: red
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 30
    },
    showAnswerText: {
        color: red,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 20
    }
})

function mapStateToProps (state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(Quiz)