const axios = require('axios');

export const getWeather = (citySearch) => ({
    type: 'GET_WEATHER',
    payload: axios.get(`/weather/${citySearch}`)
});

export const updateCity = (citySearch) => ({
    type: 'UPDATE_CITY',
    payload: { citySearch }
})
