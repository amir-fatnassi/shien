import * as userauthtype from "./UserAuthList-type";

const inatialState = {
  token: null,
  isAuthenticated: null,
  isLoading: false,
  user: {},
  err: null,
};

const UserAuthReducer = (state = inatialState, action) => {
  switch (action.type) {
    case userauthtype.USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case userauthtype.REGISTER_SUCCESS:
    case userauthtype.USER_LOADED:
      localStorage.setItem("profil", JSON.stringify({ ...action.payload }));
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
      };
    case userauthtype.UPDATE_PHOTO:
      return{
        ...state,
        user: action.payload
      }
    case userauthtype.AUTH_ERROR:
    case userauthtype.LOGIN_FAIL:
    case userauthtype.LOGOUT_SUCCESS:
    case userauthtype.REGISTER_FAIL:
      localStorage.clear();
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case userauthtype.GET_ERRORS:
      return {
        ...state,
        err: action.payload,
      };
    case userauthtype.CLEAR_ERRORS:
      return {
        ...state,
        err: null,
      };
    default:
      return state;
  }
};

export default UserAuthReducer;
