import { errorMessage } from "../views/searchView";

export default class Search {
  constructor(query) {
    this.query = query;
    this.key = 'b4ea110422367ae01f9de8c612462846';
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    this.errorMessage = errorMessage();
  }

  async getResultsFahrenheit() {
    const response = await fetch(`${this.url}${this.query}&units=imperial&APPID=${this.key}`, { mode: 'cors' });
    const data = await response.json();
    try {
      if (`${response.status}` === '200') {
        this.result = data.list[0];
      } else {
        this.errorMessage();
      }
    } catch(error) {
      throw Error;
    }
  }

  async getResultsCelsius() {
    const response = await fetch(`${this.url}${this.query}&units=metric&APPID=${this.key}`, { mode: 'cors' });
    const data = await response.json();
    try {
      if (`${response.status}` === '200') {
        this.result = data.list[0];
      } else {
        this.errorMessage();
      }
    } catch(error) {
      throw Error;
    }
  }
};
