import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>App</Text>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
})