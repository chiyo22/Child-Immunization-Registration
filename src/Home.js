import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen, green } from './Constants';

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100 }}>
      <Text style={{ color: 'green', fontSize: 64 }}>Welcome</Text>
      <Text style={{ color: 'green', fontSize: 40, marginBottom: 40 }}>Immunization Registration</Text>
      <Btn bgColor='yellow' textColor={darkGreen} btnLabel="Click to Register" Press={() => props.navigation.navigate("Register")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({})

export default Home;
