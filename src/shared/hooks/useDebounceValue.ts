import { useEffect, useState } from "react";

/**
 * 
 * @param value any
 * @param delay number = milliseconds
 */
const useDebounceValue = (value: any, delay: number) => {
   const [localValue, setLocalValue] = useState<any>(value);
   useEffect(() => {
      const id = setTimeout(() => setLocalValue(value), delay);
      return () => clearTimeout(id);
   }, [value]);

   return localValue;
}

export default useDebounceValue;