import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black', // Set the text color to black
    fontSize: 20, // You can adjust the font size as needed
  },
});

export default App;
