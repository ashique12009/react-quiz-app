import { useState } from 'react';
import * as userApi from '../services/userApi';

const useUser = () => {
  const [users, setUsers] = useState([]);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      const data = await userApi.fetchUsers();
      setUsers(data);
    }
    catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  // Fetch a user by email (for login)
  const fetchUserByEmail = async (email) => {
    try {
      const user = await userApi.fetchUserByEmail(email);
      return user;
    }
    catch (error) {
      console.error("Error fetching user by email:", error);
      return null;
    }
  }

  // Register a new user
  const registerUser = async (userData) => {
    try {
      const data = await userApi.registerUser(userData);
      setUsers(prevUsers => [...prevUsers, data]);
    }
    catch (error) {
      console.error("Error registering user:", error);
    }
  }

  return { users, fetchUsers, registerUser, fetchUserByEmail };
}

export default useUser;