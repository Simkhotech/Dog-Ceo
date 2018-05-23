import {
  GET_BREED_RANDOM_IMAGE_REQUEST,
  GET_BREED_RANDOM_IMAGE_SUCCESS,
  GET_BREED_RANDOM_IMAGE_FAILURE,
  GET_BREED_URL,
} from '../constants';

export default function getBreedRandomImage(breed, subBreed) {
  return (dispatch) => {
    dispatch({
      type: GET_BREED_RANDOM_IMAGE_REQUEST,
    });

    const breedPartUrl = `${breed}${(subBreed ? `/${subBreed}` : '')}`;
    const breedLabel = `${breed}${(subBreed ? ` ${subBreed}` : '')}`;

    return fetch(GET_BREED_URL.replace('breedPartUrl', breedPartUrl))
      .then(response => response.json())
      .then((json) => {
        if (json.status === 'success') {
          dispatch({
            type: GET_BREED_RANDOM_IMAGE_SUCCESS,
            payload: {
              image: json.message,
              label: breedLabel,
            },
          });
        } else {
          dispatch({
            type: GET_BREED_RANDOM_IMAGE_FAILURE,
            payload: json.message,
          });
        }
      })
      .catch(reason => dispatch({
        type: GET_BREED_RANDOM_IMAGE_FAILURE,
        payload: reason.message,
      }));
  };
}
