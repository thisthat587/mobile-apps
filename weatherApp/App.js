import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './screens/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusbar} />
      <Header />
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  statusbar: {
    backgroundColor: 'red'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
