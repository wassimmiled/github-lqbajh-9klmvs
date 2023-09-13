import React from 'react';
import { useSelector } from 'react-redux';
  // KATA 2 : Complete Delete  Item

const TotalCompleteItems = () => {
  const getCompletedTodo = () => {
    // KATA 3 : Complete Total Complete Item counting and displaying
    return 0 // To change
  };
  return <h4 className="mt-3">Total Complete Items: {getCompletedTodo()}</h4>;
};

export default TotalCompleteItems;
