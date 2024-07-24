import { SafeAreaView, View, TextInput, Text, Button } from 'react-native';
import React, { useState } from 'react';

export default function Question2({ navigation, route }) {
  const { city } = route.params;
  console.log(city);
  const [activity, setActivity] = useState('');

  const handleClick = () => setActivity();

  return (
    <SafeAreaView>
      <Text>Would you like an indoor or outdoor activity?</Text>
      <TextInput
        onChangeText={setActivity}
        value={activity}
        placeholder="Enter indoors or outdoors"
      ></TextInput>
      <Button
        title="Submit"
        onPress={() => navigation.navigate('Question3', { city, activity })}
      />
    </SafeAreaView>
  );
}
