import React, { useState } from 'react';
import { View, Text, CheckBox } from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';
import Field from './Field';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Immunizations = ['BCG', 'MMR', 'RV', 'DTaP'];

const Register = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [selectedImmunizations, setSelectedImmunizations] = useState([]);

  const handleToggleImmunization = (immunization) => {
    // Toggle the selection of immunization
    setSelectedImmunizations((prevSelection) => {
      if (prevSelection.includes(immunization)) {
        return prevSelection.filter((item) => item !== immunization);
      } else {
        return [...prevSelection, immunization];
      }
    });
  };

  const handleRegister = async () => {
    // Input validations
    if (!firstName.trim() || !lastName.trim() || !age.trim() || !gender.trim()) {
      // Display an alert if any of the fields are empty
      alert('Please fill out all fields.');
      return;
    }

    // Your registration logic goes here
    alert(`Account created with immunizations: ${selectedImmunizations.join(', ')}`);
    props.navigation.navigate('Login');

    // Save the registered child's information to AsyncStorage
    const childInfo = { firstName, lastName, age, gender, immunizations: selectedImmunizations };
    try {
      const existingChildren = await AsyncStorage.getItem('@ChildRegistrationApp:children');
      const children = existingChildren ? JSON.parse(existingChildren) : [];
      children.push(childInfo);
      await AsyncStorage.setItem('@ChildRegistrationApp:children', JSON.stringify(children));

      // Navigate to the ChildrenList component
      props.navigation.navigate('ChildrenList');
    } catch (error) {
      console.error('AsyncStorage error:', error.message);
    }
  };


  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text style={{ color: 'green', fontSize: 64, fontWeight: 'bold', marginTop: 20 }}>
          Register
        </Text>
        <Text style={{ color: 'green', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>
          Enter child's details
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field placeholder="First Name" onChangeText={setFirstName} />
          <Field placeholder="Last Name" onChangeText={setLastName} />
          <Field placeholder="Age" onChangeText={setAge} keyboardType="numeric" />
          <Field placeholder="Gender" onChangeText={setGender} keyboardType="gender" />

          <Text style={{ color: darkGreen, fontSize: 16, marginVertical: 10 }}>
            Select Immunizations:
          </Text>
          {Immunizations.map((immunization) => (
            <View key={immunization} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
              <CheckBox
                value={selectedImmunizations.includes(immunization)}
                onValueChange={() => handleToggleImmunization(immunization)}
              />
              <Text style={{ marginLeft: 8 }}>{immunization}</Text>
            </View>
          ))}

          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Submit"
            Press={() => {
              handleRegister();
            }}
          />
        </View>
      </View>
    </Background>
  );
};

export default Register;
