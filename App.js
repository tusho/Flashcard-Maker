import React from 'react'
import { View } from 'react-native'
import DecksOverview from './components/DecksOverview'
import AddDeck from './components/AddDeck'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Ionicons } from '@expo/vector-icons'


export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <DecksOverview />
      </View>
    </Provider>
  );
}