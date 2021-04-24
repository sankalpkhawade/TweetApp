import { globalActionTypes } from '../actions/action-types';

const initialState = {
  selectedPage: "Login",
  loaderEnabled: false,
  loaderMessage: "",
}

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case globalActionTypes.SHOW_LOADER: {
      return {
        ...state,
        loaderEnabled: true,
        loaderMessage: action.payload
      }
    }
    case globalActionTypes.HIDE_LOADER: {
      return {
        ...state,
        loaderEnabled: false,
      }
    }
    case globalActionTypes.UPDATE_SELECTED_PAGE: {
      return {
        ...state,
        selectedPage:  action.payload,
      }
    }
    default: return state;
  }
}

export default globalReducer;