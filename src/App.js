import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';

const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>Ma Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
};

// KATA 1 : Complete Submit item action

// KATA 2 : complete delete item action

// KATA 3 : implement displaying total completed Item

// KATA 4 (optional) : Suggest and . or implement the multi-selection delete

export default App;
