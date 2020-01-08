import { errorMessage } from "../views/searchView";

export default class Search {
  constructor(query) {
    this.query = query;
    this.key = 'b4ea110422367ae01f9de8c612462846';
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';
  }

  async getResultsFahrenheit() {
    try {  
      const response = await fetch(`${this.url}${this.query}&units=imperial&APPID=${this.key}`, { mode: 'cors' });
      const data = await response.json();
      this.result = data.list[0];
    } catch(error) {
      errorMessage();
    }
  }

  async getResultsCelsius() {
    try {  
      const response = await fetch(`${this.url}${this.query}&units=metric&APPID=${this.key}`, { mode: 'cors' });
      const data = await response.json();
      this.result = data.list[0];
    } catch(error) {
      errorMessage();
    }
  }
};
