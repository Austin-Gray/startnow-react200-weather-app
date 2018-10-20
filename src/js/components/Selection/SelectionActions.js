const axios = require('axios');

export const getWeather = (citySearch) => ({
    type: 'GET_WEATHER',
    payload: axios.get(`http://localhost:3000/weather/${citySearch}`)
});

export const updateCity = (citySearch) => ({
    type: 'UPDATE_CITY',
    payload: { citySearch }
})
