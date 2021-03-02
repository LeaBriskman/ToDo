import React from 'react';
import './ToDo.css';

const ToDo = ({task, onDeleteHandler, id}) => {
  return (
    <div className="todoWrapper">
      <input 
        className="checkbox hidden-box" 
        type="checkbox" 
        id={id} 
        name={task}
      />
      <label 
        htmlFor={id} 
        className="check-label"
      >
        <span className="check-label-text">{task}</span>
      </label>
      <div 
        className="delete" 
        onClick={() => onDeleteHandler(id)}
      >
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );
};

export default ToDo;