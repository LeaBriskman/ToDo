import React from 'react';
import ToDo from './ToDo/ToDo';
import './ToDoList.css';

const ToDoList = ({tasks, onDeleteHandler}) => {
  const tasksList = tasks.map((task, index) => {
    return (
      <ToDo 
        key={index}
        id={index}
        task={task} 
        onDeleteHandler={onDeleteHandler}
      />
    )
  });

  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
};

export default ToDoList;