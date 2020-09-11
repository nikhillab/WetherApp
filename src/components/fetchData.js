import axios from "axios";

class FetchData {
  constructor() {
    this.apikey = "3265874a2c77ae4a04bb96236a642d2f";
    this.type = ["forecast", "weather"];
  }

  getWeather = (cityname, weathertype) => {
    return axios.get(
      `https://api.openweathermap.org/data/2.5/${
        this.type[Number(weathertype)]
      }?q=${cityname}&appid=${this.apikey}`,
      { origin: "cors" }
    );
  };
}

export default new FetchData();
