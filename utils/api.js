import {AsyncStorage} from 'react-native'


const deckExample = {
    'French Vocabulary Example': {
        'title': 'French Vocabulary Example',
        'questions': [
            {
                question: 'What is \'cheese\' in French',
                answer: 'fromage'
              },
              {
                question: 'What is \'hello\' in French',
                answer: 'salut'
              }
        ],
    }
}


export const Flashcard_Decks_KEY = 'Flashcard_Decks'


export function getDecks () {
    return AsyncStorage.getItem(Flashcard_Decks_KEY)
        .then(result => {
            if (result === null) {
                AsyncStorage.getItem(Flashcard_Decks_KEY, ((deckExample) => {return JSON.stringify(deckExample)}))
                return deckExample
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
    return AsyncStorage.mergeItem(Flashcard_Decks_KEY, JSON.stringify({
        [title]: deck
    }))

}

export function addCardToDeck (title, card) {
    
    return AsyncStorage.getItem(Flashcard_Decks_KEY)
		.then((results) => {
			const data = JSON.parse(results)
			data[title]['questions'].push(card)
			AsyncStorage.setItem(Flashcard_Decks_KEY, JSON.stringify(data))
    })
    
}