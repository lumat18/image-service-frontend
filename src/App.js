import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import SearchResult from "./components/SearchResult";
import UploadForm from "./components/UploadForm";
import Tags from "./components/Tags";

class App extends Component {


  state = {
    searchFromValue: "",
    uploadFormLinkValue: "",
    uploadFormTagValue: [],
    images: []
  };

  handleSearchInputChange = event => {
    this.setState({
      searchFromValue: event.target.value
    });
  };

  handleUploadLinkInputChange = event => {
    this.setState({
      uploadFormLinkValue: event.target.value
    });
  };



  handleSearchSubmit = event => {
    event.preventDefault();
    console.log("Submit confirmed");
    const API = `http://localhost:8080/api/photos?tag=${this.state.searchFromValue}`;
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
          images: jsondata
        });
      })
      .catch(error => {
        console.log(error);
      });
      this.state.searchFromValue='';
  };

  handleUploadSubmit = event => {
    event.preventDefault();
    const API = `http://localhost:8080/api/photos`;


    const jsonToPost = {
      "href": this.state.uploadFormLinkValue,
      "tags": this.state.uploadFormTagValue
  }

    console.log(JSON.stringify(jsonToPost));
    const Param={
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(jsonToPost),
      method: "POST"
    }
    fetch(API, Param)
    .then(data=>{return data.json()})
    .then(res=>{console.log(res)})
    .catch(err=>console.log(err));

    this.setState({
      uploadFormLinkValue: '',
      uploadFormTagValue: []
    });
  }

  render() {
    return (
      <div className="App">
        <SearchForm
          value={this.state.searchFromValue}
          change={this.handleSearchInputChange}
          submit={this.handleSearchSubmit}
        />
        <UploadForm
          linkValue={this.state.uploadFormLinkValue}
          linkChange={this.handleUploadLinkInputChange}
          tagValue={this.state.uploadFormTagValue}
          submit={this.handleUploadSubmit}
        />
        <SearchResult images={this.state.images} />
      </div>
    );
  }
}

export default App;
