import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button} from 'react-native';
import BreweriesHome from './BreweriesHome';
import BreweriesDetails from './BreweriesDetails';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BreweriesHome"
        screenOptions={{
          title: 'My App',
          headerStyle: {backgroundColor: '#38b6ba',    textAlign: 'center',},
          headerTitleStyle: {color: 'white'},
        }}>
          
        <Stack.Screen
          name="BreweriesHome"
          component={BreweriesHome}
          options={{title: 'Breweries Home'}}
        />
        <Stack.Screen
          name="BreweriesDetails"
          component={BreweriesDetails}
          options={{title: 'Breweries Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
