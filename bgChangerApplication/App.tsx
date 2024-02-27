import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, { useState } from 'react';

const App = () => {
  const [bgColor, setBgColor] = useState('white');
  const [circleColor, setcircleColor] = useState('black');

  function changeBg() {

    const hexNum = '1234567890ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexNum[Math.floor(Math.random() * 16)];
    }

    setBgColor(color);
    changeCircleColor() 
  }
  function changeCircleColor() {

    const hexNum = '1234567890ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexNum[Math.floor(Math.random() * 16)];
    }

    setcircleColor(color);
  }


  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <View style={[styles.container, { backgroundColor: bgColor }]}>
        <View style={[styles.circle, { backgroundColor: circleColor }]}></View>
        <TouchableOpacity style={styles.button} onPress={changeBg}>
          <Text style={styles.btnTxt}>Change color</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height:100,
    // width: 100,
    // borderRadius: 100 / 2,
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 6,
  },
  btnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
