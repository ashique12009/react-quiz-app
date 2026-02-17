import { useEffect, useState } from "react";
import * as questionApi from "../services/questionApi";

const useQuestion = () => {
  const [questions, setQuestions] = useState([]);

  // Fetch all questions
  const fetchQuestions = async () => {
    try {
      const data = await questionApi.fetchQuestions();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return { questions };
};

export default useQuestion;