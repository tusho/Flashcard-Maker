import React from 'react'
import { Platform } from 'react-native'
import DecksOverview from '../components/DecksOverview'
import AddDeck from '../components/AddDeck'
import { Ionicons } from '@expo/vector-icons'

import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'

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

const RootNavigator = createAppContainer(Platform.OS === 'ios' ? createBottomTabNavigator(TabNavigator) : createMaterialTopTabNavigator(TabNavigator));

export default createAppContainer(RootNavigator);