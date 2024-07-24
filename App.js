import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, View, TextInput, Text, Button } from 'react-native';
import Question1 from './components/Question1';
import Question2 from './components/Question2';
import Question3 from './components/Question3';
import QuestionFinal from './components/QuestionFinal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Question1" component={Question1} />
        <Stack.Screen name="Question2" component={Question2} />
        <Stack.Screen name="Question3" component={Question3} />
        <Stack.Screen name="QuestionFinal" component={QuestionFinal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
