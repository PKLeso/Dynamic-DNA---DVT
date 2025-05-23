import { DELETE_USER, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST, ADD_USER, UPDATE_USER,  GET_USER_OBJ } from "./ActionType";

const initialState = {
  loading: true,
  userList: [],
  userObj: {},
  errorMessage: "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FAIL_REQUEST:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload
      };
      
    case GET_USER_LIST:
      return {
        loading: false,
        errorMessage: '',
        userList: action.payload,
        userObj: {}
      };

    case DELETE_USER:
      return {
        ...state,
        loading: false
      }

    case ADD_USER:
      return {
        ...state,
        loading: false
      }

      case UPDATE_USER:
      return {
        ...state,
        loading: false
      }

      case GET_USER_OBJ:
      return {
        ...state,
        loading: false,
        userObj: action.payload
      }

    default:
      return state;
  }
};
