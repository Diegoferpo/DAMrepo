import { StyleSheet, Text, View } from 'react-native';
import HomeView from './screens/HomeView'
import CatalogoView from './screens/CatalogoView';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"
          component={HomeView}
          options={{title: 'Welcome'}} />

        <Stack.Screen name="Catalogo" 
          component={CatalogoView}/>
          
      </Stack.Navigator>
    </NavigationContainer>
);
}