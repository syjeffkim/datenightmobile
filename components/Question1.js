import { SafeAreaView, View, TextInput, Text, Button } from 'react-native';
import React, { useState } from 'react';

export default function Question1({ navigation }) {
  const [city, setCity] = useState('');

  const handleClick = () => setCity();

  return (
    <SafeAreaView>
      <Text>What city are we going out to?</Text>
      <TextInput
        onChangeText={setCity}
        value={city}
        placeholder="Enter a city"
      ></TextInput>
      <Button
        title="Submit"
        onPress={() => navigation.navigate('Question2', { city })}
      />
    </SafeAreaView>
  );
}
