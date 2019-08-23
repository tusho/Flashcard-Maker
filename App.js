import React from 'react'
import { View, Platform } from 'react-native'
import DecksOverview from './components/DecksOverview'
import AddDeck from './components/AddDeck'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
  'My Decks': DecksOverview,
  'Add Deck': AddDeck,
});

const TabNav = createAppContainer(TabNavigator)

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <TabNav />
      </View>
    </Provider>
  );
}