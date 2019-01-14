import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

var mapStateToProps = () => {};

var mapDispatchToProps = (dispatch) => ({
  handleVideoSearch: (q) => dispatch(handleVideoSearch(q)),
});

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

export default SearchContainer;
