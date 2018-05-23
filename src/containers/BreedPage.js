import { connect } from 'react-redux';
import getBreedRandomImage from '../actions/breedPage';
import BreedPage from '../components/BreedPage';

const mapStateToProps = state => ({
  image: state.breedPage.breedPage.image,
  label: state.breedPage.breedPage.label,
  hasError: state.breedPage.services.breedPage.hasError,
  message: state.breedPage.services.breedPage.message,
});

const mapDispatchToProps = { getBreedRandomImage };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BreedPage);
