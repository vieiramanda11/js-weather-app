export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const key = 'b4ea110422367ae01f9de8c612462846';
      const url = 'http://api.openweathermap.org/data/2.5/forecast?id=';
  
      const response = await fetch(`${url}${query}&APPID=${key}`, { mode: 'cors' });
      const data = await response.json();
      this.weather = data.list[0].weather[0].main;
      this.temp = data.list[0].main.temp;
    } catch(error) {
      console.log(error, 'not working');
    }
  }
};
