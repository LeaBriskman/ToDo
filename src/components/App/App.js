import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Input from '../Input/Input';
import ToDoList from '../ToDoList/ToDoList';

class App extends Component {
  state = {
    tasks: []
  }

  onDeleteHandler = index => {
    const newTasksList = [...this.state.tasks];
    newTasksList.splice(index, 1);
    this.setState({tasks: newTasksList});
  }

  onSubmitHandler = task => this.setState({tasks: [...this.state.tasks, task]});
  
  render() {
    return (
      <div className="wrapper">
        <Header 
          header='ToDo List'
        />       
        <Input onSubmitHandler={this.onSubmitHandler} />
        <ToDoList 
          tasks={this.state.tasks} 
          onDeleteHandler={this.onDeleteHandler}
        />
      </div>
    );
  }


};

export default App;