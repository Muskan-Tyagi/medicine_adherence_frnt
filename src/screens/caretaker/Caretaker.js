import {Text} from 'react-native';
import React from 'react';
import Addmedicine from '../AddMedicine';
import {createStackNavigator} from '@react-navigation/stack';
import UserMed from '../UserMed';
const Stack = createStackNavigator();

const CareTaker = ({navigation}) => {
  const eventFnc = () => {
    navigation.getParent().navigate('Events');
  };
  const addMedFnc = () => {
    return (
      <Text onPress={() => eventFnc} >
        Click
      </Text>
    );
  };
  return (
    <Stack.Navigator initialRouteName="Addmedicine">
      <Stack.Screen
        name="Addmedicine"
        component={Addmedicine}
        id="event"
        options={{
          headerShown: false,
          headerRight: {addMedFnc},
        }}></Stack.Screen>
      <Stack.Screen
        name="UserMed"
        component={UserMed}
        options={{headerShown: true}}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CareTaker;
