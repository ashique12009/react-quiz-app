import { useState } from 'react';
import * as userApi from '../services/userApi';

const useUser = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const data = await userApi.fetchUsers();
      setUsers(data);
    }
    catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  const registerUser = async (userData) => {
    try {
      const data = await userApi.registerUser(userData);
      setUsers(prevUsers => [...prevUsers, data]);
    }
    catch (error) {
      console.error("Error registering user:", error);
    }
  }

  return { users, fetchUsers, registerUser };
}

export default useUser;