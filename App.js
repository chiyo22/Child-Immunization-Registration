import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Register from './src/Register';
import Login from './src/Login';
import ChildrenList from './src/ChildrenList';
import ChildProfile from './src/ChildProfile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarPosition="top">
        
       <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Reg" component={AuthStack} />
        <Tab.Screen name="ChildrenList" component={ChildrenList} />
        <Tab.Screen name="ChildProfile" component={ChildProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;