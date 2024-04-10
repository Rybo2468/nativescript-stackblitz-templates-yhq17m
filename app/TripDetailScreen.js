// TripDetailScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const TripDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { trip } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Title: {trip.title}</Text>
      <Text>Date: {trip.date}</Text>
      {/* Add more details like images, companions, places visited, etc. */}
      <Button title="Expenses" onPress={() => navigation.navigate('Expenses')} />
    </View>
  );
};

export default TripDetailScreen;
