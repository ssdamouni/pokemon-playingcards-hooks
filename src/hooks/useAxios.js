import useLocalStorage from "./useLocalStorage";
import axios from 'axios';

function useAxios(keyInLS, baseUrl) {
    const [responses, setResponses] = useLocalStorage(keyInLS);

    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
      const response = await axios.get(`${baseUrl}${restOfUrl}`);
      setResponses(data => [...data, formatter(response.data)]);
    };
    
    const clearResponses = () => setResponses([]);
  
    return [responses, addResponseData, clearResponses];
  }
  

  export default useAxios;