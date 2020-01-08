import Search from './models/Search';
import * as searchView from './views/searchView';

const searchForm = document.getElementById('search-form');
const toggleButton = document.getElementById('toggle');
const state = {}

const unit = document.createElement('span');
unit.classList.add('unit');
const temp = document.querySelector('.temp');

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

const controlSearchFahrenheit = async () => {
    await state.search.getResultsFahrenheit();
    console.log(state.search.result);
    searchView.clearContent();
    searchView.renderResult(state.search.result);
  } 

const controlSearchCelsius = async () => {
  await state.search.getResultsCelsius();
  console.log(state.search.result);
  searchView.clearContent();
  searchView.renderResult(state.search.result);
} 
  

const switchUnits = () => {
  if (toggleButton.firstChild.data === 'CELSIUS') {
    controlSearchCelsius();
    toggleButton.textContent = 'FAHRENHEIT';
    // const unitText = unit.innerHTML = 'c';
    // unitText.insertAdjacentElement('beforeend', temp);
    console.log('c')    
  } else {
    console.log('f')
    controlSearchFahrenheit();
    toggleButton.textContent = 'CELSIUS';
    // const unitText = unit.innerHTML = 'f';
    // unitText.insertAdjacentElement('beforeend', temp);
  }
}

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  controlSearch();
});

toggleButton.addEventListener('click', switchUnits);
