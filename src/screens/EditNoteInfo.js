import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllNotes, selectNoteById } from '../store/selectors/noteSelectors';
import { useEffect, useState } from 'react';
import Note from '../components/Note';
import { Feather } from '@expo/vector-icons';
import { addNote, updateNote } from '../store/reducers/noteSlice';
import { useRoute } from '@react-navigation/native';

export default function EditNoteInfo({ navigation }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const dispatch = useDispatch()
    const route = useRoute();
    const { id } = route.params;
    const notes = useSelector(selectAllNotes)

    useEffect(() => {
        const note = notes.find((note) => note.id == id)
        setTitle(note?.title || '')
        setContent(note?.content || '')
    }, [notes])

    const handleAddNote = () => {
        dispatch(updateNote({
            id: id,
            title: title,
            content: content
        }));
        navigation.navigate('Home')
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.titleInput}
                placeholder='Enter title of note...'
                onChangeText={setTitle}
                value={title}
            />
            <TextInput
                multiline={true}
                placeholder='this is your area this is your area this is your area this is your area this is your area this is your area this is your area '
                style={styles.contentInput}
                onChangeText={setContent}
                value={content}
            />

            <TouchableOpacity style={styles.saveBTN} onPress={handleAddNote}>
                <Feather name="save" size={35} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: 'white',
    },
    titleInput: {
        width: '100%',
        height: 100,
        fontSize: 48,
    },
    contentInput: {
        width: '100%',
        textAlignVertical: 'top',
        fontSize: 30,
    },
    saveBTN: {
        position: 'absolute',
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        bottom: 15,
        right: 15,
        borderRadius: 50,
        backgroundColor: 'grey',
        zIndex: 100,
        elevation: 100
    }
});
