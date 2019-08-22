import {AsyncStorage} from 'react-native'

export const Flashcard_Decks_KEY = 'Flashcard_Decks'

const sampleData = {
    'Sample_Deck': {
        'title': 'Sample_Deck',
        'questions': [],
    }
}

export function getDecks () {
    return AsyncStorage.getItem(Flashcard_Decks_KEY)
        .then((result) => {
            if (result === null) {
                AsyncStorage.getItem(Flashcard_Decks_KEY, JSON.stringify(sampleData))
                return JSON.parse(sampleData)
            } else {
                return JSON.parse(result)
            }
        })
}

export function getDeck (id) {
    return getDecks()
        .then((results) => {
            return results[id]
        })
}

export function saveDeckTitle (title) {
    const deck = { title, questions: [] }
    return AsyncStorage.mregeItem(Flashcard_Decks_KEY, JSON.stringify({
        [title]: deck
      }))
}

export function addCardToDeck () {
    //take title and card argument and add the card to the list of questions for the deck with the associated title
}