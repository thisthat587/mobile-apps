import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.space}>
          <Image
            source={{
              uri: 'https://youimg1.tripcdn.com/target/10051f000001gstzn8960.jpg?proc=source%2ftrip',
            }}
            style={styles.cardImage}
          />
          <View style={styles.placeDetail}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardLabel}>Agra, uttarPradesh, India</Text>
            <Text style={styles.cardDescription}>
              - Made by Sahjahan, in the memory of his beloved wife Mumtaz
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={{
              uri: 'https://www.baps.org/Data/Sites/1/Media/GalleryImages/22298/WebImages/Shri_Ram_Mandir_Shilapujan_BAPS_00.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.placeDetail}>
            <Text style={styles.cardTitle}>Ramlala Mandir</Text>
            <Text style={styles.cardLabel}>Ayodhya, uttarPradesh, India</Text>
            <Text style={styles.cardDescription}>
              - God Ram in the form of his child age{' '}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  placeDetail: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // marginLeft: 2,
    // marginRight: 2,
    borderRadius: 4,
    paddingHorizontal: 8,
  },

  card: {},

  elevatedCard: {
    margin: 8,
  },

  cardImage: {
    height: 200,
    // margin: 4,
    borderRadius: 4,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },

  cardLabel: {
    color: 'black',
  },

  cardDescription: {
    color: 'black',
  },

  space:{
    paddingVertical:4
  }
});
