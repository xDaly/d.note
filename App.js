import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import NoteInfo from './src/screens/NoteInfo';
import LeftHeaderHome from './src/headers/LeftHeaderHome';
import RightHeaderHome from './src/headers/RightHeaderHome';
import { Provider } from 'react-redux';
import store from './src/store';
import LeftHeaderNoteInfo from './src/headers/LeftHeaderNoteInfo';
import { Feather } from '@expo/vector-icons';
import EditNoteInfo from './src/screens/EditNoteInfo';


const Stack = createStackNavigator();

export default function App() {
  const screenOptions = {
    headerTitle: '',
    headerStyle: {
      height: 120
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerLeft: () => <LeftHeaderHome />,
              headerRight: () => <RightHeaderHome />,
            }}
          />
          <Stack.Screen
            name="NoteInfo"
            component={NoteInfo}
            options={({ navigation }) => ({
              headerLeft: () => <LeftHeaderNoteInfo navigation={navigation} />,
              headerRight: () => <Feather style={{marginRight:10}} name="save" size={24} color="black" />
              ,
            })}
          />
           <Stack.Screen
            name="EditNoteInfo"
            component={EditNoteInfo}
            options={({ navigation }) => ({
              headerLeft: () => <LeftHeaderNoteInfo navigation={navigation} />,
              headerRight: () => <Feather style={{marginRight:10}} name="save" size={24} color="black" />
              ,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
