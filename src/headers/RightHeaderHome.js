import { StyleSheet, Text, Image } from 'react-native';


export default function RightHeaderHome() {
    return (
        <>
            <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ag4NjlG0sGkDbvCO8uNMV1wl8QrWHTjqsQ&usqp=CAU' }}
                style={styles.ProfileIMG}
            />
        </>
    );
}

const styles = StyleSheet.create({
    ProfileIMG: {
    width:50,
    height:50,
    borderRadius: 50,
    marginRight:10
    },
});
