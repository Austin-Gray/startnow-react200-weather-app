import { connect } from 'react-redux';
import Selection from './Selection';

function mapStoreToProps(store) {
    return {
        citySearch: store.selection.citySearch,
    };
}

export default connect(mapStoreToProps)(Selection);