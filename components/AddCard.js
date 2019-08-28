import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { lightPurp, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'

class AddCard extends Component {

    state = {
        textQuestion: '',
        textAnswer: ''
    }

    handleSubmit() {
        const { textQuestion, textAnswer } = this.state
        const title = this.props.navigation.state.params
        const { addCard, navigation } = this.props
        const card = { question: textQuestion, answer: textAnswer}

        if (textQuestion === '' || textAnswer === '') {
            Alert.alert('Please enter both a question and answer before hitting \'submit\'!')
        } else {
            addCard(title, card)
            addCardToDeck(title, card)
            this.setState({textQuestion: '', textAnswer: ''})
            navigation.pop(1)
            Alert.alert('New card successfuly created!')
        }     
    }

    render() {

        return(
            <View style={styles.container}>
                <Text style={styles.header}>Please enter both your question and the corresponding answer:</Text>
                <TextInput 
                    style={styles.inputField}
                    placeholder="Question Name"
                    onChangeText={(val) => this.setState({textQuestion: val})}
                    value={this.state.textQuestion}
                />
                <TextInput 
                    style={styles.inputField}
                    placeholder="Corresponding Answer"
                    onChangeText={(val) => this.setState({textAnswer: val})}
                    value={this.state.textAnswer}
                />
                <TouchableOpacity>
                    <Text style={styles.submit} onPress={() => this.handleSubmit()}>Submit</Text>
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
        fontSize: 30,
        textAlign: 'center',
    },
    inputField: {
        marginTop: 20,
        padding: 10,
        borderColor: gray,
        borderWidth: 1,
        borderRadius: 10,
        width: 250,
        fontSize: 20,
        textAlign: 'center'
    },
    submit: {
        textAlign: 'center',
        marginTop: 25,
        color: lightPurp,
        padding: 10,
        borderColor: gray,
        borderWidth: 1,
        borderRadius: 10,
    }
})

function mapDispatchToProps (dispatch) {
    return {
        addCard: (title, card) => dispatch(addCard(title, card))
    }
}

function mapStateToProps (state) {
    
    return {
        state
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)