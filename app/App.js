import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TripsListScreen from './TripsListScreen';
import TripDetailScreen from './TripDetailScreen';
import ExpenseScreen from './ExpenseScreen';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TripsList">
        <Stack.Screen name="TripsList" component={TripsListScreen} options={{ title: 'Trips' }} />
        <Stack.Screen name="TripDetail" component={TripDetailScreen} options={{ title: 'Trip Detail' }} />
        <Stack.Screen name="Expenses" component={ExpenseScreen} options={{ title: 'Expenses' }} />
      </Stack.Navigator>
      {/* Example of a styled button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
