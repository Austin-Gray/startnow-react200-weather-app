const axios = require('axios');

export const getWeather = (city) => ({
    type: 'GET_WEATHER',
    payload: axios.get(`http://localhost:3000/weather/${city}`)
});

export const updateCity = (city) => ({
    type: 'UPDATE_CITY',
    payload: { city }
})
