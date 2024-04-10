// TripsListScreen.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TripsListScreen = () => {
  const navigation = useNavigation();

  const trips = [
    { id: 1, title: 'Trip 1', date: '2023-05-15' },
    { id: 2, title: 'Trip 2', date: '2023-08-20' },
    { id: 3, title: 'Trip 3', date: '2023-11-10' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('TripDetail', { trip: item })}>
      <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#cc' }}>
        <Text>{item.title}</Text>
        <Text>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={trips}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default TripsListScreen;
