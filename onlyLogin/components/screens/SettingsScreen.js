import { View, Text, StyleSheet } from "react-native"

export default function SettingsScreen() {
    return (
        <View style={styles.SettingsContainer}>
            <Text style={styles.SettingsText}>Welcome to Settings</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    SettingsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    SettingsText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})