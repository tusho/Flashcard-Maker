import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { lightPurp, gray, green, red } from '../utils/colors'
import { connect } from 'react-redux'


class Quiz extends Component {

    state = {
        showAnswer: false,
        showCounter: true,
        questionCounter: 0,
        correctCounter: 0,
    }

    render() {
        const { showAnswer, showCounter } = this.state

        const title = this.props.navigation.state.params
        const questions = this.props.state[title].questions

        handleCorrect = () => {
            const { questionCounter } = this.state
            if (questionCounter < (questions.length - 1)) {
                this.setState({ questionCounter: questionCounter + 1 })
            } else if (questionCounter = (questions.length - 1)) {
                Alert.alert('Quiz completed')
            }
        }
        
        return(
            <View style={styles.container}>
                {showCounter === true && <Text style={styles.counter}>Counter</Text>}
                {showAnswer === false 
                    ? <View>
                        <Text style={styles.header}>{JSON.stringify(questions[this.state.questionCounter].question)}</Text>
                        <Text style={styles.showAnswerText} onPress={() => this.setState({showAnswer: true})}>Show Answer</Text>
                      </View>
                    : <View>
                        <Text style={styles.header}>{JSON.stringify(questions[this.state.questionCounter].answer)}</Text>
                      </View>
                }
                <TouchableOpacity style={[styles.submit, styles.correct]} onPress={() => handleCorrect()}>
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
    },
    counter: {
        ...StyleSheet.absoluteFillObject,
        position: 'absolute',
        alignSelf: 'flex-start',
        marginTop: 15,
        fontSize: 15
    }
})

function mapStateToProps (state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(Quiz)