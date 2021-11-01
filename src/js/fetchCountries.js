const BASE_URL = 'https://restcountries.com/rest/v2/name';

function fetchCountries(countryName) {
  return fetch(`${BASE_URL}/${countryName}`).then(response => response.json());
}

export default { fetchCountries };
