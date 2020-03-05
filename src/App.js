import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";

class App extends Component {
  state = {
    value: "",
    images: [] 
  };

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Submit confirmed");
    const API = `http://localhost:8080/api/photos?tag=${this.state.value}`;
    console.log(API);
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Cannot fetch from API");
      })
      .then(response => response.json())
      .then(jsondata => {
        console.log(jsondata);
        this.setState({
          images: jsondata[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <SearchForm
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleSubmit}
        />
        <SearchResult resultdata={this.state} />
      </div>
    );
  }
}

export default App;
