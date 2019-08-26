import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import { lightPurp, gray } from '../utils/colors'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

function SubmitButton ({ style = {}, onPress }) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={[style]}>Submit</Text>
      </TouchableOpacity>
    )
}

class AddDeck extends Component {

    state = {
        textValue: ''
    }

    handleSubmit() {
        const { textValue } = this.state
        const { addDeck } = this.props
        if (textValue === '' || textValue === undefined) {
            Alert.alert('Please enter a title before clicking on \'submit\'!')
        } else {
            addDeck(textValue)
            saveDeckTitle(textValue)
            this.setState({textValue: ''})
            Alert.alert('New deck successfuly created!')
        }     
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.header}>What is the title of your new deck?</Text>
                <TextInput 
                    style={styles.inputField}
                    placeholder="Deck Name"
                    onChangeText={(val) => this.setState({textValue: val})}
                    value={this.state.textValue}
                />
                <SubmitButton 
                    style={styles.submit} 
                    onPress={() => this.handleSubmit()}
                />
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
        addDeck: (deck) => dispatch(addDeck(deck))
    }
}

export default connect(null, mapDispatchToProps)(AddDeck)