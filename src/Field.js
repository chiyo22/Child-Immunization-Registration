import React from 'react';
import { View, TextInput, Picker } from 'react-native';
import { darkGreen } from './Constants';

const Field = (props) => {
  // Check if the field type is 'gender'
  if (props.keyboardType === 'gender') {
    return (
      <View style={{ width: '78%', marginVertical: 10 }}>
        <Picker
          selectedValue={props.value}
          onValueChange={(itemValue, itemIndex) => props.onChangeText(itemValue)}
          style={{ height: 50, color: darkGreen }}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
      </View>
    );
  }

  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: darkGreen,
        paddingHorizontal: 10,
        width: '78%',
        backgroundColor: 'rgb(220,220, 220)',
        marginVertical: 10,
      }}
      placeholderTextColor={darkGreen}
    ></TextInput>
  );
};

export default Field;
