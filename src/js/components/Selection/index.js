import { connect } from 'react-redux';
import Selection from './Selection';

function mapStoreToProps(store) {
    return {
        city: store.selection.city,
    };
}

export default connect(mapStoreToProps)(Selection);