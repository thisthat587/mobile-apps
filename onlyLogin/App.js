import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/screens/LoginScreen';
import DashboardScreen from './components/screens/DashboardScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import DrawerScreen from './components/screens/DrawerScreen';
import HomeScreen from './components/screens/HomeScreen';

export default function App() {
  return (
      <View style={styles.container}>
        {/* <StatusBar style="auto" /> */}
        <LoginScreen />
        <DrawerScreen />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
