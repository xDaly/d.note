import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useEffect } from 'react';


export default function LeftHeaderNoteInfo({ navigation }) {

    const goBack = () => {
        navigation.goBack()
    }
    return (
        <>
            <TouchableOpacity style={styles.backBTN} onPress={goBack}>
                <FontAwesome name="arrow-left" size={20} color="black" />
                <Text style={styles.backTXT}>Back</Text>
            </TouchableOpacity >
        </>
    );
}

const styles = StyleSheet.create({
    backBTN: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft:10,
        alignItems: 'center'
    },
    backTXT: {
        marginLeft: 4,
        fontSize: 20
    }
});
