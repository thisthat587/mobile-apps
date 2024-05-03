import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import DashboardScreen from "./DashboardScreen";
import SettingsScreen from "./SettingsScreen";
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Dashboard" component={DashboardScreen} />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}