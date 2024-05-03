import { View, Text, StyleSheet } from "react-native"

export default function DashboardScreen() {
    return (
        <View style={styles.dashboardContainer}>
            <Text style={styles.dashboardText}>Welcome to dashboard</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dashboardText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})