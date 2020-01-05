import Search from './js/models/Search';

const state = {}

const controlSearch = async () => {
  const query = '2172797';

  if (query) {
    state.search = new Search(query);
    await state.search.getResults();
    console.log(state.search.weather)
    console.log(state.search.temp)
  } 
}