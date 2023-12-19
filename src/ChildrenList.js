import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getAllUsers } from './database.js';
import ChildProfile from './ChildProfile';

const ChildrenList = ({ navigation }) => {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    // Fetch the registered children when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    // Fetch the registered children from your database
    getAllUsers((data) => {
      setChildren(data);
    });
  };

  const sortChildren = (key) => {
    // Sort the children based on the specified key (e.g., 'age' or 'name')
    const sortedChildren = [...children].sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });

    setChildren(sortedChildren);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToChildProfile(item)}>
      <View style={{ padding: 10 }}>
        <Text>{`${item.firstName} ${item.lastName}, Age: ${item.age}, Gender: ${item.gender}`}</Text>
      </View>
    </TouchableOpacity>
  );

  const navigateToChildProfile = (child) => {
    // Navigate to the ChildProfile component, passing child information as params
    navigation.navigate('ChildProfile', child);
  };

  return (
    <View>
      <FlatList
        data={children}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ChildrenList;
