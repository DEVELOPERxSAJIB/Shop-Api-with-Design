import {
  BRAND_STATUS_SUCCESS,
  CATEGORY_CREATE_SUCCESS,
  CREATE_BRAND_FAILED,
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  CREATE_TAG_FAILED,
  CREATE_TAG_SUCCESS,
  DELETE_BRAND_FAILED,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_TAG_SUCCESS,
  GET_BRAND_FAILD,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_CATEGORY_FAILED,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_TAGS_FAILED,
  GET_TAGS_SUCCESS,
  TAG_STATUS_SUCCESS
} from "./actionTypes";
import { initState } from "./initState";

// create shop reducer
const shopReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
        error: ""
      };

    case GET_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: payload
      };

    case GET_BRAND_FAILD:
      return {
        ...state,
        loading: false,
        brands: [],
        error: payload
      };

    case CREATE_BRAND_REQUEST:
      return {
        ...state,
        loading: true
      };

    case CREATE_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: [...state.brands, payload]
      };

    case CREATE_BRAND_FAILED:
      return {
        ...state,
        loading: false,
        brands: [],
        error: payload
      };

    case DELETE_BRAND_REQUEST:
      return {
        ...state,
        loading: false
      };

    case DELETE_BRAND_SUCCESS:
      return {
        ...state,
        brands: [...state.brands.filter((data) => data._id !== payload)]
      };

    case DELETE_BRAND_FAILED:
      return {
        ...state,
        error: payload
      };

    case BRAND_STATUS_SUCCESS:
      state.brands[state.brands.findIndex((data) => data._id === payload._id)] =
        payload;
      return {
        ...state,
        state: state.brands
      };

    case GET_TAGS_SUCCESS:
      return {
        ...state,
        tags: payload
      };

    case GET_TAGS_FAILED:
      return {
        ...state,
        error: payload
      };

    case CREATE_TAG_SUCCESS:
      return {
        ...state,
        tags: [...state.tags, payload]
      };

    case CREATE_TAG_FAILED:
      return {
        ...state,
        error: payload
      };

    case DELETE_TAG_SUCCESS:
      return {
        ...state,
        tags: [...state.tags.filter((data) => data._id !== payload)]
      };

    case TAG_STATUS_SUCCESS:
      state.tags[state.tags.findIndex((data) => data._id === payload._id)] =
        payload;

      return {
        ...state,
        tags: state.tags
      };

    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        error: ""
      };

    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories : payload
      };

    case GET_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
        error : payload
      };

    case CATEGORY_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        categories : [...state.categories, payload]
      };

    default:
      return state;
  }
};

// export default
export default shopReducer;
