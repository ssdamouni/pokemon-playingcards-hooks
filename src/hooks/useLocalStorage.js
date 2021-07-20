import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    console.log(value)
    
    return [value, setValue];
  }
  
  export default useLocalStorage;