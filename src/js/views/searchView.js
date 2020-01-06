const searchInput = document.getElementById('search-input');
const header = document.querySelector('.header');

export const getInput = () => searchInput.value;

export const clearInput = () => {
  searchInput.value = '';
}

export const clearContent = () => {
  header.innerHTML = '';
}

export const renderResult = (city) => {
  const appHtml = `
    <span class="city ">
      ${city.name}
      <i class="fa fa-map-marker "></i>
      <span class="today ">Today</span>
      </span>
      <span class="weather ">
      <span class="temp ">
        ${city.main.temp}<sup>&deg;</sup>
        <span class="unit ">f</span>
      </span>
      <span class="wind-scale ">
        <table>
          <tr>
            <td>Wind Direction</td>
            <td>
              <i class="wi wi-wind towards-45-deg"></i>
            </td>
          </tr>
          <tr>
            <td>Wind Scale</td>
            <td>
              <i class="wi wi-wind-beaufort-7"></i>
            </td>
          </tr>
        </table>
      </span>
      <i class="wi wi-night-sleet"></i>
      <span class="time">
        <i class="wi wi-time-3"></i>
      </span>
      <span class="day">Monday</span>
    </span>
  `;
  header.insertAdjacentHTML('beforeend', appHtml);
}