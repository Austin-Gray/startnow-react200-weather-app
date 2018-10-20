import { connect } from 'react-redux';
import City from './City';

function mapStoreToProps(store) {
    return {
        city: store.selection.city,
        lat: store.selection.lat,
        lon: store.selection.lon,
        temp: store.selection.temp,
        pressure: store.selection.pressure,
        humidity: store.selection.humidity,
        temp_min: store.selection.temp_min,
        temp_max: store.selection.temp_max,
        wind: store.selection.wind
    };
}
export default connect(mapStoreToProps)(City);