import { connect } from 'react-redux';
import getBreedList from '../actions/breedList';
import BreedList from '../components/BreedList';

const mapStateToProps = state => ({
  breedList: state.breedList.breedList.breedList,
  hasError: state.breedList.services.breedList.hasError,
  message: state.breedList.services.breedList.message,
});

const mapDispatchToProps = { getBreedList };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BreedList);
