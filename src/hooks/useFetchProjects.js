import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function useFetchProjects() {
  const [loading, setLoad] = useState(false);
  const [Projects, setProjects] = useState([]);
  const FetchProjects = useCallback(async () => {
    await setLoad(true);
    try {
      const response = await axios.get(
        "https://nodejsportfolio.onrender.com/v1/Projects"
      );
      if (response) {
        if (response.status === 200) {
          setProjects(response.data);
          console.log(response);
        }
      }
      await setLoad(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    FetchProjects();
  }, [FetchProjects]);
  return [loading, Projects];
}
