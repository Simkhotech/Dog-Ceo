import {
  GET_BREED_RANDOM_IMAGE_SUCCESS,
  GET_BREED_RANDOM_IMAGE_FAILURE,
} from '../constants';

const initialState = {
  breedPage: {
    label: null,
    image: null,
  },
  services: {
    breedPage: {
      hasError: null,
      message: null,
    },
  },
};

export default function getBreedRandomImage(state = initialState, action) {
  switch (action.type) {
    case GET_BREED_RANDOM_IMAGE_SUCCESS:
      return {
        ...state,
        breedPage: {
          label: action.payload.label,
          image: action.payload.image,
        },
        services: {
          breedPage: {
            hasError: false,
          },
        },
      };
    case GET_BREED_RANDOM_IMAGE_FAILURE:
      return {
        ...state,
        services: {
          breedPage: {
            hasError: true,
            message: action.payload,
          },
        },
      };
    default:
      return state;
  }
}
