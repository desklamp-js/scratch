  import { bindActionCreators } from 'redux';
  import { connect } from 'react-redux';

  import * as actionCreators from './actions';
  import App from '../components/App';

  function mapStateToProps(state) {
    return {
      user: state.username,
    };
  }

  function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
  }



  export default connect(mapStateToProps, mapDispachToProps)(App);
