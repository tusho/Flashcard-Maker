import React from 'react'
import { View, Platform } from 'react-native'
import DecksOverview from './components/DecksOverview'
import AddDeck from './components/AddDeck'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = {
  'My Decks': {
    screen: DecksOverview,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='md-filing' size={30} color={tintColor} />
    }
  },
  'Add Deck': {
    screen: AddDeck,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
};

const TabNav = createAppContainer(Platform.OS === 'ios' ? createBottomTabNavigator(TabNavigator) : createMaterialTopTabNavigator(TabNavigator))

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <TabNav />
      </View>
    </Provider>
  );
}