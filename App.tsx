import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightText}>App</Text>
    </View>
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
  darkText: {
    color: '#fff',
  },
  lightText: {        
    color: '#000',
  },
  // title:{ color: 'blue', fontSize: 20, textAlign: 'center', marginTop: 50 }  
})