import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import DecksOverview from './components/DecksOverview'
import AddDeck from './components/AddDeck'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import Constants from 'expo-constants'
import { lightGray } from './utils/colors'

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

const TabNav = createAppContainer(Platform.OS === 'ios' ? createBottomTabNavigator(TabNavigator) : createMaterialTopTabNavigator(TabNavigator))

function MyStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={{flex: 1}}>
        <MyStatusBar backgroundColor={lightGray} barStyle="light-content" />
        <TabNav />
      </View>
    </Provider>
  );
}