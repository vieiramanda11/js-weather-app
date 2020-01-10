import Search from './models/Search';
import * as searchView from './views/searchView';

const searchForm = document.getElementById('search-form');
const toggleButton = document.getElementById('toggle');
const state = {};

const controlSearch = async () => {
  const query = searchView.getInput();

  if (query) {
    state.search = new Search(query);
    await state.search.getResultsCelsius();
    toggleButton.style.display = 'inline-block';
    toggleButton.textContent = 'CHANGE TO FAHRENHEIT';
    searchView.clearContent();
    searchView.renderResult(state.search.result);
    searchView.clearInput();
  }
};

const controlSearchFahrenheit = async () => {
  await state.search.getResultsFahrenheit();
  searchView.clearContent();
  searchView.renderResult(state.search.result);
};

const controlSearchCelsius = async () => {
  await state.search.getResultsCelsius();
  searchView.clearContent();
  searchView.renderResult(state.search.result);
};

const switchUnits = () => {
  if (toggleButton.firstChild.data === 'CHANGE TO CELSIUS') {
    controlSearchCelsius();
    toggleButton.textContent = 'CHANGE TO FAHRENHEIT';
  } else {
    controlSearchFahrenheit();
    toggleButton.textContent = 'CHANGE TO CELSIUS';
  }
};

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  controlSearch();
});

toggleButton.addEventListener('click', switchUnits);
