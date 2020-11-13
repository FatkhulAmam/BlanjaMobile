import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './router'
import { Provider } from 'react-redux'

//import store
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
