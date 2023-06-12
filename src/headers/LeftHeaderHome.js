import { StyleSheet, Text, View } from 'react-native';


export default function LeftHeaderHome() {
    return (
        <>
            <Text style={styles.title}>Note.d</Text>
            <Text style={styles.hint}>Enjoy note taking with friends</Text>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight:'bold',
        marginLeft: 10
    },
    hint: {
        fontSize: 14,
        marginLeft: 10,
        color:'grey'
    }
});
