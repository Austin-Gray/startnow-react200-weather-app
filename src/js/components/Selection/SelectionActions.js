export const getWeather = () => ({
    type: 'GET_WEATHER',
    payload: axios({
        url: `api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`,
        method: 'get',
    })
});
