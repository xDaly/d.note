import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Addnote({ navigation }) {

    const navigate = () => {
        navigation.navigate('NoteInfo')
    }
    return (
        <TouchableOpacity style={styles.addNoteWrapper} onPress={navigate}>
            <View style={styles.addIcon}>
                <FontAwesome name="plus" size={12} color="black" />
            </View>
            <Text style={styles.label}>New note</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    addNoteWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        margin : '1.5%',
        height: Dimensions.get('window').width * 0.45,
        borderColor: '#5EB5F9',
        backgroundColor: '#BBF3F5',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 6
    },
    addIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        height: '30%',
        borderColor: '#5EB5F9',
        backgroundColor: 'white',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 50
    },
    label: { color: '#299FFB' }
});
