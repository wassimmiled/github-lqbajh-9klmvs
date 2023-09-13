import React, { useState } from 'react';
import { addTodo } from '../store/todoSlice';
import { useDispatch } from 'react-redux';

const AddTodoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    // KATA 1 : Complete Submit action ( Add new TOD ITEM)

    // dispatch(
    // );
  };

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
      ></input>

      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
