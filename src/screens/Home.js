import { StyleSheet, Text, View } from 'react-native';
import Addnote from '../components/AddNote';
import { useSelector } from 'react-redux';
import { selectAllNotes, selectNoteById } from '../store/selectors/noteSelectors';
import { useEffect } from 'react';
import Note from '../components/Note';

export default function Home({ navigation }) {
    const notes = useSelector(selectAllNotes);



    return (
        <View style={styles.container}>
            <Addnote navigation={navigation} />
            {notes.map((note) => (<Note key={note.id} note={note} navigation={navigation} />))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
    },
});
