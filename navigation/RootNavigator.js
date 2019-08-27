import React from 'react'
import { Platform } from 'react-native'
import DecksOverview from '../components/DecksOverview'
import AddDeck from '../components/AddDeck'
import { Ionicons } from '@expo/vector-icons'
import SingleDeck from '../components/SingleDeck'
import AddCard from '../components/AddCard'
import Quiz from '../components/Quiz'
import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'

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
}

const TabNav = (Platform.OS === 'ios' ? createBottomTabNavigator(TabNavigator) : createMaterialTopTabNavigator(TabNavigator))

const RootNavigator = createStackNavigator({
  Home: TabNav,
  NewDeck: AddDeck,
  SingleDeck: SingleDeck,
  AddDeck: AddDeck,
  AddCard: AddCard,
  Quiz: Quiz,
}, {
  headerMode: 'none'
})

export default createAppContainer(RootNavigator)