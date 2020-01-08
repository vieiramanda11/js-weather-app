import Search from './models/Search';
import * as searchView from './views/searchView';

const searchForm = document.getElementById('search-form');
const state = {}

const controlSearch = async () => {
  const query = searchView.getInput();
  console.log(query);

  if (query) {
    state.search = new Search(query);
    await state.search.getResultsCelsius();
    console.log(state.search.result);
    
    searchView.clearContent();
    searchView.renderResult(state.search.result);
    searchView.clearInput();
  } 
};

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  controlSearch();
});