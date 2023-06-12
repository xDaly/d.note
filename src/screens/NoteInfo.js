import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllNotes, selectNoteById } from '../store/selectors/noteSelectors';
import { useEffect, useState } from 'react';
import Note from '../components/Note';
import { Feather } from '@expo/vector-icons';
import { addNote } from '../store/reducers/noteSlice';

export default function NoteInfo({ navigation }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const makeid = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }


    const handleAddNote = () => {
        dispatch(addNote({
            id: makeid(5),
            title: title,
            content: content,
            date: new Date().toLocaleDateString()
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
