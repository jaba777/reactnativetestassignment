import React, { useState, useEffect } from 'react'
import Array_1 from '../data/Array_1.json';
import Array_2 from "../data/Array_2.json";

export default function List() {
  const [mergedArray, setMergedArray] = useState([]);


  // const [mixJson, setMixJson] = useState([]);

  


  useEffect(() => {
    const mergeArrays = (array1, array2) => {
      const merged = [...array1];
      for (const item of array2) {
        if (!merged.some(existingItem => existingItem.id === item.id)) {
          merged.push(item);
        }
      }
      return merged;
    };

    setMergedArray(mergeArrays(Array_1, Array_2));
  }, []);


  return (
    <div>
      {mergedArray.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}
