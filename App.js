import React from 'react'
import { View, StatusBar } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Constants from 'expo-constants'
import { lightGray } from './utils/colors'
import RootNavigator from './navigation/RootNavigator.js'
import { setLocalNotification } from './utils/notification'

function MyStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <MyStatusBar backgroundColor={lightGray} barStyle="light-content" />
        <RootNavigator />
      </Provider>
    );

  }
}