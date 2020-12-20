import React, { Component } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import TodoList from "./Components/TodoList/TodoList";
import Toggle from "./Components/Toggle/Toggle";

class App extends Component {
  state = {
    todoItems: [],
    theme: "light",
  };

  componentDidMount() {
    if (!localStorage.getItem("todoItems") || !localStorage.getItem("theme")) {
      localStorage.setItem("todoItems", JSON.stringify(this.state.todoItems));
      localStorage.setItem("theme", this.state.theme);
    } else {
      this.setState({
        todoItems: JSON.parse(localStorage.getItem("todoItems")),
        theme: localStorage.getItem("theme"),
      });
    }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const item = event.target.todoItem.value;
    this.setState({
      todoItems: [...this.state.todoItems, item],
    });
    localStorage.setItem(
      "todoItems",
      JSON.stringify([...this.state.todoItems, item])
    );
    event.target.todoItem.value = "";
  };

  handleThemeToggle = (_event) => {
    this.setState({
      theme: this.state.theme === "light" ? "dark" : "light",
    });
    localStorage.setItem(
      "theme",
      this.state.theme === "light" ? "dark" : "light"
    );
  };

  render() {
    const appClass = this.state.theme === "dark" ? "App App--dark" : "App";
    return (
      <div className={appClass}>
        <h1>Todo</h1>
        <Toggle handleThemeToggle = {this.handleThemeToggle} theme = {this.state.theme}/>
        <Form handleFormSubmit={this.handleFormSubmit} />
        <TodoList todoItems={this.state.todoItems} />
      </div>
    );
  }
}

export default App;
