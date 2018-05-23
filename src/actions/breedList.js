import {
  GET_BREED_LIST_REQUEST,
  GET_BREED_LIST_SUCCESS,
  GET_BREED_LIST_FAILURE,
  GET_BREED_LIST_URL,
} from '../constants';

const fillDogs = (breeds) => {
  let array = [];

  Object.keys(breeds).forEach((breed) => {
    if (breeds[breed].length > 0) {
      array = array.concat(breeds[breed].map((subBreed) => {
        return {
          breed,
          subBreed,
          label: `${subBreed} ${breed}`,
        };
      }));
    } else {
      array.push({
        breed,
        label: breed,
      });
    }
  });
  return array;
};

export default function getBreedList() {
  return (dispatch) => {
    dispatch({
      type: GET_BREED_LIST_REQUEST,
    });

    return fetch(GET_BREED_LIST_URL)
      .then(response => response.json())
      .then(json => dispatch({
        type: GET_BREED_LIST_SUCCESS,
        payload: fillDogs(json.message),
      }))
      .catch(reason => dispatch({
        type: GET_BREED_LIST_FAILURE,
        payload: reason.message,
      }));
  };
}
