const defaultState = {
    city: '',
    coord: {},
    weather: {},
    wind: ''
};

export default function CityReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_WEATHER_FULFILLED': {
            return {
                ...state,
                city: payload.data.name,
                coord: payload.data.coord,
                weather: payload.data.main,
                wind: payload.data.wind.speed
            };
        }
        case 'UPDATE_CITY': {
            return {
                ...state,
                city: payload.city
            }
        }
        default: {
            return state;
        }
    }
}
