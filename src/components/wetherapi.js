import React, { Component } from "react";
import FetchData from "./fetchData";
import WetherData from "./wetherData";

class WetherApi extends Component {
  state = {
    error: "",
  };

  componentDidMount() {
    if (!this.state.weatherData) {
      this.getlatestData();
    }
  }

  getlatestData() {
    FetchData.getWeather(this.props.city, 1)
      .then((response) => {
        this.setState({
          weatherData: response.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          error:error.message
        })
      });
  }

  render() {
    // if (this.state.weatherData) {

    //   console.log(this.state.weatherData)
    // }
    // // if(this.state.forecastData){
    // //   console.log(this.state.forecastData)
    // // }

    return (
      <>
        {this.state.weatherData && (
          <WetherData weatherData={this.state.weatherData} />
        )}
        <br/>
        {this.state.error && <h3>{this.state.error}.Enter a valid Name</h3>}
        
      </>
    );
  }
}

export default WetherApi;
