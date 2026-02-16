const API_URL = "http://localhost:3001/questions";

// Fetch all questions
export const fetchQuestions = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
}

// Fetch a question by ID
export const fetchQuestionById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch question");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching question by ID:", error);
    throw error;
  }
}

// Add a new question
export const addQuestion = async (questionData) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionData),
    });

    if (!response.ok) {
      throw new Error("Failed to add question");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding question:", error);
    throw error;
  }
}

// Update an existing question
export const updateQuestion = async (id, questionData) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(questionData),
    });

    if (!response.ok) {
      throw new Error("Failed to update question");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating question:", error);
    throw error;
  }
}

// Delete a question
export const deleteQuestion = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete question");
    }

    return true; // Return true if deletion was successful
  } catch (error) {
    console.error("Error deleting question:", error);
    throw error;
  }
}