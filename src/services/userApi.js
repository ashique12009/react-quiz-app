const API_URL = "http://localhost:3001/users";

// Fetch all users
export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

// Fetch a user by email (for login)
export const fetchUserByEmail = async (email) => {
  try {
    const response = await fetch(`${API_URL}?email=${email}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const data = await response.json();
    return data.length > 0 ? data[0] : null; // Return the first user if found, otherwise null
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
}

// Register a new user
export const registerUser = async (userData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}