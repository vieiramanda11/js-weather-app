const Search = async (query) => {
  try {
    const key = 'b4ea110422367ae01f9de8c612462846';
    const url = 'http://api.openweathermap.org/data/2.5/forecast?id='
    const response = await fetch(`${url}${query}&APPID=${key}`, { mode: 'cors' })
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.log(error);
  }
}

export default Search;
