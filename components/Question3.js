import { SafeAreaView, View, TextInput, Text, Button } from 'react-native';
import React, { useState } from 'react';

export default function Question3({ navigation, route }) {
  const { city, activity } = route.params;
  console.log(city);
  console.log(activity);
  const [meal, setMeal] = useState('');

  const handleClick = () => setMeal();
  return (
    <SafeAreaView>
      <Text>What were we craving for dinner?</Text>
      <TextInput
        onChangeText={setMeal}
        value={meal}
        placeholder="Enter craving"
      ></TextInput>
      <Button
        title="Submit"
        onPress={() =>
          navigation.navigate('QuestionFinal', { city, activity, meal })
        }
      />
    </SafeAreaView>
  );
}
