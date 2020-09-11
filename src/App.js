import React, { Component } from "react";
import WetherApi from "./components/wetherapi";
import "./App.css";
import { TextField, Button, Container } from "@material-ui/core";

class App extends Component {
  state = {
    name: "",
    searched: false,
  };

  getLatestName = () => {
    this.latestData();
  };

  SubmitHandler = (event) => {
    event.preventDefault();
    this.latestData();
    this.setState({
      searched: true,
    });
  };

  latestData() {
    let name = document.getElementById("outlined-basic");
    const latestname = name.value;
    this.setState({ name: latestname });
    this.setState({
      searched: false,
    });
  }

  render() {
    return (
      <Container maxWidth='sm'>
      <div className='App'>
        
          <br />
          <form>
            <TextField
              id='outlined-basic'
              label='Enter City Name:'
              variant='outlined'
              value={this.state.name}
              onChange={this.getLatestName}
            />
            <br />
            <br />
            <Button
              variant='contained'
              color='primary'
              endIcon='🔎'
              type='submit'
              onClick={this.SubmitHandler}>
              Search
            </Button>
          </form>
          {this.state.searched && (
            <WetherApi city={this.state.name.toLowerCase()} />
          )}
       
      </div>
      </Container>
    );
  }
}

export default App;
