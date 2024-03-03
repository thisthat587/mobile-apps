import { StyleSheet, Text, View, Image, TouchableOpacity, ImageSourcePropType, Pressable } from 'react-native'
import React, { useState } from 'react'
import { PropsWithChildren } from 'react'

import hapticFeedback from 'react-native-haptic-feedback'


import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'


type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps) => {
    return (
        <View>
            <Image style={styles.image} source={imageUrl} />
        </View>
    )
}


const Demo = () => {

    const [imagePath, setImagpath] = useState<ImageSourcePropType>(DiceOne);

    const rollTheDice = () => {

        const hapticFeedbackOptions = {
            enableVibrateFallback: true,
            ignoreAndroidSystemSettings: false
        }

        hapticFeedback.trigger('impactHeavy', hapticFeedbackOptions)
        const randomNumber = Math.floor(Math.random() * 6) + 1
        switch (randomNumber) {
            case 1:
                setImagpath(DiceOne)
                break;
            case 2:
                setImagpath(DiceTwo)
                break;
            case 3:
                setImagpath(DiceThree)
                break;
            case 4:
                setImagpath(DiceFour)
                break;
            case 5:
                setImagpath(DiceFive)
                break;
            case 6:
                setImagpath(DiceSix)
                break;
            default:
                setImagpath(DiceOne)
                break;
        }
    }

    return (
        <View style={styles.container}>
            <Dice imageUrl={imagePath} />
            <TouchableOpacity
                style={styles.button}
                onPress={rollTheDice}
            >
                <Text style={styles.btnTxt}>Roll the dice</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Demo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#93f8fa',
        padding: 4,
        borderRadius: 6,
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 6
    },
    btnTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        padding: 6
    },
})

