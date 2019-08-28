import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { lightPurp, gray, green, red, lightGray } from '../utils/colors'
import { connect } from 'react-redux'

class Quiz extends Component {

    state = {
        showAnswer: false,
        showResult: false,
        questionCounter: 0,
        answerCounter: 0,
    }

    render() {
        const { showAnswer, showResult, answerCounter } = this.state
        let { questionCounter } = this.state
        const { navigation } = this.props
        const { navigate } = navigation
        const title = this.props.navigation.state.params
        const questions = this.props.state[title].questions
        const totalQuestions = questions.length

        handleSubmit = (status) => {
            {status === 'correct' && this.setState({ answerCounter: answerCounter + 1 })}
            if (questionCounter < (questions.length - 1)) {
                this.setState({ questionCounter: questionCounter + 1, showAnswer: false})
            } else if (questionCounter = (questions.length - 1)) {
                this.setState({ questionCounter: 0, showResult: true })
            }
        }

        handleReset = () => {
            this.setState({ questionCounter: 0, showAnswer: false, answerCounter: 0, showResult: false})
        }
        
        if (totalQuestions === 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.header}>No quesitons in this deck!</Text>
                    <TouchableOpacity style={styles.routeButton} onPress={() => navigation.pop(1)}>
                        <Text style={styles.routeButtonText}>Back to Deck</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeButton} onPress={() => navigate('Home')}>
                        <Text style={styles.routeButtonText}>Home</Text>
                    </TouchableOpacity>
                </View>
            )
        } return (
            <View style={{flex: 1}}>
                {showResult === false 
                    ?
                    <View style={styles.container}>
                        <Text style={styles.counter}>Counter: {questionCounter + 1}/{totalQuestions}</Text>
                        {showAnswer === false 
                            ? <View>
                                <Text style={styles.header}>{JSON.stringify(questions[questionCounter].question)}</Text>
                                <Text style={styles.showAnswerText} onPress={() => this.setState({showAnswer: true})}>Show Answer</Text>
                            </View>
                            : <View>
                                <Text style={styles.header}>{JSON.stringify(questions[questionCounter].answer)}</Text>
                            </View>
                        }
                        <TouchableOpacity style={[styles.submit, styles.correct]} onPress={() => handleSubmit('correct')}>
                            <Text style={styles.buttonText}>Correct</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.submit, styles.incorrect]} onPress={() => handleSubmit('incorrect')}>
                            <Text style={styles.buttonText}>Incorrect</Text>
                        </TouchableOpacity>
                    </View>
                    : 
                    <View style={styles.container}>
                        <Text style={styles.header}>Result</Text>
                        <Text style={styles.percentage}>{Math.floor((answerCounter / totalQuestions) * 100)}%</Text>
                        <Text style={{marginBottom: 20}}>You correclty answered {answerCounter} out of {totalQuestions} questions.</Text>
                        <TouchableOpacity style={styles.routeButton} onPress={() => handleReset()}>
                            <Text style={styles.routeButtonText}>Restart Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.routeButton} onPress={() => navigation.pop(1)}>
                            <Text style={styles.routeButtonText}>Back to Deck</Text>
                        </TouchableOpacity>
                    </View>
                }
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
    },
    percentage: {
        fontSize: 50,
        color: green,
        fontWeight: 'bold',
        marginBottom: 10
    },
    routeButton: {
        textAlign: 'center',
        marginTop: 25,
        color: lightPurp,
        padding: 5,
        borderColor: gray,
        backgroundColor: lightGray,
        borderWidth: 1,
        borderRadius: 10,
        width: 200
    },
    routeButtonText: {
        textAlign: 'center',
        fontSize: 20
    }
})

function mapStateToProps (state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(Quiz)