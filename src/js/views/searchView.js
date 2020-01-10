const searchInput = document.getElementById('search-input');
const header = document.querySelector('.header');
const errorText = document.getElementById('error-message');

export const getInput = () => searchInput.value;

export const clearInput = () => {
  searchInput.value = '';
};

export const clearContent = () => {
  header.innerHTML = '';
};

export const renderResult = city => {
  const appHtml = `
    <span class='city'>
      ${city.city.name}
      <span class='today'>${city.list[0].weather[0].main}: ${city.list[0].weather[0].description}</span>
    </span>
    <span class='weather'>
      <span class='temp'>
        ${city.list[0].main.temp}<sup>&deg;</sup>
      </span>
    </span>
  `;
  header.insertAdjacentHTML('beforeend', appHtml);
};

export const errorMessage = () => {
  errorText.style.display = 'block';
};
