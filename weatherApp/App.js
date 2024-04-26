import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './screens/Header';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.txt}>
        hello india
      </Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
