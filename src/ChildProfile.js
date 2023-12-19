import React from 'react';
import { View, Text } from 'react-native';
import Background from './Background';
import Field from './Field';

const ChildProfile = ({ route }) => {
  // Extract child information from the route parameters
  const { firstName, lastName, age, gender, immunizations } = route.params;

  return (
    
    <View>
      <Text>First Name: {firstName}</Text>
      <Text>Last Name: {lastName}</Text>
      <Text>Age: {age}</Text>
      <Text>Gender: {gender}</Text>
      <Text>Immunizations: {immunizations.join(', ')}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

export default ChildProfile;
