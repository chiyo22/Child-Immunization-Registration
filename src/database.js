import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@ChildRegistrationApp:children';

export const addUser = async (firstName, lastName, age, gender, immunizations) => {
  // Fetch existing users from AsyncStorage
  const existingUsers = await AsyncStorage.getItem(STORAGE_KEY);
  const users = existingUsers ? JSON.parse(existingUsers) : [];

  // Add the new user
  const newUser = { id: users.length + 1, firstName, lastName, age, gender, immunizations };
  users.push(newUser);

  // Save the updated user list to AsyncStorage
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const getAllUsers = async (callback) => {
  const users = await AsyncStorage.getItem(STORAGE_KEY);
  const parsedUsers = users ? JSON.parse(users) : [];
  callback(parsedUsers);
};
