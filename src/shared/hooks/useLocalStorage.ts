import { useEffect, useState } from "react";

const useLocalStorage = (key: string, initialValue: string): [value: string, setValue: React.Dispatch<React.SetStateAction<string>>] => {
   const valueFromStorage = localStorage.getItem(key);

   if (!valueFromStorage) {
      localStorage.setItem(key, initialValue);
   }

   const [storage, setToStorage] = useState(valueFromStorage || initialValue);

   useEffect(() => {
      localStorage.setItem(key, storage);
   }, [storage]);

   return [storage, setToStorage];
}

export default useLocalStorage;