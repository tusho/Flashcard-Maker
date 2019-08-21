import {AsyncStorage} from 'react-native'

export const Flashcard_Decks_KEY = 'Flashcard_Decks'

export function getDecks () {
    return AsyncStorage.getItem(Flashcard_Decks_KEY)
        .then(JSON.parse)
}

export function getDeck (id) {
    return getDecks()
        .then((results) => {
            return results[id]
        })
}

export function saveDeckTitle () {
    //take title argument and save to deck
}

export function addCardToDeck () {
    //take title and card argument and add the card to the list of questions for the deck with the associated title
}