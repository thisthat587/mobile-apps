import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require('C:\\Users\\Piyush singh\\Downloads\\dice.jpg')}
      />

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
  }
})

