import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import HapticFeedback from 'react-native-haptic-feedback';
import type { PropsWithChildren } from 'react';

import DiceOne from './assets/One.png';
import DiceTwo from './assets/Two.png';
import DiceThree from './assets/Three.png';
import DiceFour from './assets/Four.png';
import DiceFive from './assets/Five.png';
import DiceSix from './assets/Six.png';

// TODO:

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.image} source={imageUrl} />
    </View>
  )
}

const App = () => {
  const [imagePath, setImagePath] = useState<ImageSourcePropType>(DiceOne);

  const rollTheDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setImagePath(DiceOne);
        break;
      case 2:
        setImagePath(DiceTwo);
        break;
      case 3:
        setImagePath(DiceThree);
        break;
      case 4:
        setImagePath(DiceFour);
        break;
      case 5:
        setImagePath(DiceFive);
        break;
      case 6:
        setImagePath(DiceSix);
        break;
      default:
        setImagePath(DiceOne);
        break;
    }
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={imagePath} />
      {/* <Image source={imagePath} style={styles.image} /> */}
      <View>
        <TouchableOpacity onPress={rollTheDice}
          style={styles.button}
        >
          <Text style={styles.btnTxt}>Roll the dice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10

  },
  button: {
    backgroundColor: 'aliceblue',
    padding: 16,
    borderRadius: 5,
    margin: 6,

  },
  btnTxt: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  }
});

export default App;
