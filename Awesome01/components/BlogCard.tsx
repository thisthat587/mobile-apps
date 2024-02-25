import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

import React from 'react';

export default function BlogCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>BlogCard</Text>
      <View style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1708344883779/368b0d1a-b477-46de-8cfa-5e216ff4dec6.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
          }}
        />
        <View style={styles.cardText}>
          <Text numberOfLines={2} style={{color: 'black', padding: 4}}>
            Hey there! 👋 If you're learning Rust now for the very first time I
            want to introduce you to 5 simple yet practical projects that will
            help you later in bigger projects. The concepts I'm presenting below
            are pretty basic and every Rust developer should be familiar with
            them.
          </Text>
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              openWebsite('https://github.com/thisthat587');
            }}>
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Read More...
            </Text>
          </TouchableOpacity>
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

  cardImage: {
    height: 200,
    borderRadius: 6,
  },

  card: {
    margin: 8,
  },

  cardText: {
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 6,
  },
});
