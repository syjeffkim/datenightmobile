import * as React from 'react';
import { SafeAreaView, Text, ActivityIndicator, View } from 'react-native';
import { OPENAI_API_KEY } from '@env';

export default function QuestionFinal({ route }) {
  const { city, activity, meal } = route.params;
  const [loading, setLoading] = React.useState(true);
  const [response, setResponse] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          'https://api.openai.com/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
              model: 'gpt-3.5-turbo',
              messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                {
                  role: 'user',
                  content: `Give me an evening date idea in ${city} with an ${activity} activity and ${meal} food for dinner. Make sure to include specific locations and names`,
                },
              ],
              max_tokens: 100,
            }),
          }
        );
        const data = await result.json();
        console.log(city, activity, meal);
        console.log('data.choices: ', data.choices[0]);
        setResponse(data.choices[0].message.content);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city, activity, meal]);

  return (
    <SafeAreaView>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          <Text>{response}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
