import React, { Component } from "react";

class Toggle extends Component {
    render() {
        return(
            <p>
                <button onClick={this.props.handleThemeToggle}>
                Toggle {this.props.theme === "light" ? "dark 🌙" : "light ☀️"} theme
                </button>
          </p>
        )
    }
};

export default Toggle;