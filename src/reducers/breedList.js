import {
  GET_BREED_LIST_SUCCESS,
  GET_BREED_LIST_FAILURE,
} from '../constants';

const initialState = {
  breedList: {
    breedList: [],
  },
  services: {
    breedList: {
      hasError: null,
      message: null,
    },
  },
};

export default function getBreedList(state = initialState, action) {
  switch (action.type) {
    case GET_BREED_LIST_SUCCESS:
      return {
        ...state,
        breedList: {
          breedList: action.payload,
        },
        services: {
          breedList: {
            hasError: false,
          },
        },
      };
    case GET_BREED_LIST_FAILURE:
      return {
        ...state,
        services: {
          breedList: {
            hasError: true,
            message: action.payload,
          },
        },
      };
    default:
      return state;
  }
}
