import React, {Component} from 'react';

class TodoList extends Component {
    render() {
        return(
            <ul className="todo-list">
            {this.props.todoItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )
    }
};

export default TodoList