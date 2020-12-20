import React, {Component} from 'react';

class Form extends Component {
    render() {
        return(
            <form onSubmit={this.props.handleFormSubmit}>
            <input type="text" name="todoItem" placeholder="todo item" />
            <button type="submit">add item</button>
          </form>
        )
    }
};

export default Form