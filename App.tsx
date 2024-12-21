import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'
import { GoogleSignin } from "@react-native-google-signin/google-signin"

GoogleSignin.configure({
  webClientId: "",
  forceCodeForRefreshToken: true,
  iosClientId: ""
})

const App = () => {
  return (
    <Navigation />
  )
}

export default App