import { View, Text, StyleSheet } from "react-native"

export default function HomeScreen() {
    return (
        <View style={styles.homeContainer}>
            <Text style={styles.homeText}>Welcome to Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})