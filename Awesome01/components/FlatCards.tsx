import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Purple</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    padding:8
  },

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 8,
  },

  cardOne: {
    backgroundColor: '#c0392b',
  },
  cardTwo: {
    backgroundColor: '#9e44ad',
  },
  cardThree: {
    backgroundColor: '#2ecc71',
  },
});

export default FlatCards;
