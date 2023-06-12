import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Note({ navigation, note }) {
    const openNote = () => {
        navigation.navigate('EditNoteInfo', { id: note.id })
    }
    return (
        <TouchableOpacity style={styles.noteWrapper} onPress={openNote}>
            <Text style={styles.title}>{note.title}</Text>
            <Text numberOfLines={9} style={styles.content}>{note.content}</Text>
            <Text style={styles.date}>{note.date}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    noteWrapper: {
        display: 'flex',
        width: '45%',
        height: Dimensions.get('window').width * 0.45,
        borderColor: '#5EB5F9',
        backgroundColor: '#BBF3F5',
        borderStyle: 'solid',
        borderWidth: 1,
        margin: '1.5%',
        borderRadius: 6
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10
    },
    content: {
        fontSize: 14,
        marginLeft: 10,
        color: 'grey'
    },
    date: {
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 10,
        color: 'black'
    }
});
