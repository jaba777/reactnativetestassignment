import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'


export const Home = () => {

  const firstSolution = () => {
    const arr = [1, 2, 3, 4, 2, 3];
    let text = ""
    for (let i = 0; i < arr.length; i++) {
      if (i === 1) {

        text += arr[1]
        text += arr[0]
      }
      if (i % 2 === 1 && i !== 1) {

        text += arr[i]
        text += arr[i - 1]
      }
    }
    return text
  }

  function secondSolution(arr) {
    let maxDiff = 0;

    arr.forEach((num, index) => {
      arr.slice(index + 1).forEach(nextNum => {
        if (nextNum > num) {
          maxDiff = Math.max(maxDiff, nextNum - num);
        }
      });
    });

    return maxDiff;
  }

  function thirdSolution(str1, str2) {
    if (str1.length !== str2.length) {
      return false; // If lengths are different, rotation is not possible
    }

    // Double the first string to create a circular effect
    let doubledStr1 = str1 + str1;

    // Check if the second string is a substring of the doubled first string
    return doubledStr1.includes(str2);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Link to='list'>დაკლიკე და ჩაირიცხე</Link>
      </header>
    </div>
  )
}
