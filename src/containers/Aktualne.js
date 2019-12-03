import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Aktualne from '../components/Aktualne/Aktualne';
import * as booksActions from '../actions/data';
import cart from '../reducers/cart';

const mapStateToProps = ({cart}) => ({
    items:cart.items,
});

const mapDispathToProps = (dispatch) => ({
     ...bindActionCreators(booksActions, dispatch),
})

export default connect(mapStateToProps, mapDispathToProps )(Aktualne);