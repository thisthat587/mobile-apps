import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import React from 'react';

const App = () => {
  return (
    <ScrollView>
      <StatusBar backgroundColor={'white'} />
      <View style={styles.chatField}></View>
      <View style={styles.inputBoxContainer}>
        <TextInput style={styles.inputBox}></TextInput>
        <TouchableOpacity>
          <Text style={styles.arrowBtn}>⏩</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  chatField: {
    height: 720,
  },
  inputBoxContainer: {
    flex:1,
    flexDirection: 'row',
  },
  inputBox: {
    backgroundColor: 'gray',
    width: 340,
    borderRadius: 100,
    marginLeft:2,
  },
  arrowBtn: {
    fontSize: 32,
    marginTop: 4,
    marginLeft: 6,
  },
});
