import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RootNavigation from './src/screens/Navigation/RootNavigation'
import { COLORS } from './src/common/styles/color'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.grimReaper} />
      <RootNavigation />
    </>
  )
}

export default App