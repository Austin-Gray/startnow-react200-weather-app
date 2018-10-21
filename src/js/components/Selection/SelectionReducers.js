const defaultState = {
    citySearch: '',
    city: '',
    lat: '',
    lon: '',
    temp: '',
    pressure: '',
    humidity: '',
    temp_min: '',
    temp_max: '',
    wind: '',
    history: []
};

export default function CityReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_WEATHER_FULFILLED': {
            return {
                ...state,
                city: payload.data.name,
                lat: payload.data.coord.lat,
                lon: payload.data.coord.lon,
                temp: payload.data.main.temp,
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                temp_min: payload.data.main.temp_min,
                temp_max: payload.data.main.temp_max,
                wind: payload.data.wind.speed,
                history: [
                    ...state.history,
                    {
                        city: payload.data.name,
                        date: new Date().toLocaleDateString(),
                        time: new Date().toLocaleTimeString()
                    }
                ]
            };
        }
        case 'UPDATE_CITY': {
            return {
                ...state,
                citySearch: payload.citySearch
            }
        }
        default: {
            return state;
        }
    }
}
