import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
  state = {
    input: ''
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.input === '') return;
    this.props.onSubmitHandler(this.state.input);
    this.setState({input: ''});
  }

  render() {
    return (
      <div className="inputWrapper">
        <form onSubmit={this.onSubmit}>
          <input 
            className="input"
            type='text'
            placeholder='Enter a new ToDo' 
            value={this.state.input}
            onChange={e => this.setState({input: e.target.value})}
          />
          <button className="button" type='submit'>Add</button>
        </form>
      </div>
    );
  };
};

export default Input;