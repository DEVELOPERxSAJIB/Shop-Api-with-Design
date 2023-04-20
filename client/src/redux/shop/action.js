import axios from "axios";
import {
  BRAND_STATUS_SUCCESS,
  CATEGORY_CREATE_FAILED,
  CATEGORY_CREATE_SUCCESS,
  CREATE_BRAND_FAILED,
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  CREATE_TAG_FAILED,
  CREATE_TAG_SUCCESS,
  DELETE_BRAND_FAILED,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  DELETE_TAG_FAILED,
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

// get all brand data
export const getAllBrands = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BRAND_REQUEST });
    await axios
      .get("http://localhost:4040/api/v1/product/brand")
      .then((res) => {
        dispatch({ type: GET_BRAND_SUCCESS, payload: res.data.brands });
      })
      .catch((error) => {
        dispatch({
          type: GET_BRAND_FAILD,
          payload: error.message
        });
      });
  } catch (error) {
    dispatch({ type: GET_BRAND_FAILD, payload: error.message });
  }
};

// create new brand
export const createNewBrand =
  ({ data, setModal, setInput, setLogo }) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_BRAND_REQUEST });
      await axios
        .post("http://localhost:4040/api/v1/product/brand", data)
        .then((res) => {
          dispatch({ type: CREATE_BRAND_SUCCESS, payload: res.data.brand });
          setModal(false);
          setInput("");
          setLogo(null);
        })
        .catch((error) => {
          dispatch({ type: CREATE_BRAND_FAILED, payload: error.message });
        });
    } catch (error) {
      dispatch({ type: CREATE_BRAND_FAILED, payload: error.message });
    }
  };

// delete brand
export const deleteBrand = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_BRAND_REQUEST });
    await axios
      .delete(`http://localhost:4040/api/v1/product/brand/${id}`)
      .then((res) => {
        dispatch({
          type: DELETE_BRAND_SUCCESS,
          payload: id
        });
      })
      .catch((error) => {
        dispatch({ type: DELETE_BRAND_FAILED, payload: error.message });
      });
  } catch (error) {
    dispatch({ type: DELETE_BRAND_FAILED, payload: error.message });
  }
};

// brand status update
export const updateBrandStatus =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`http://localhost:4040/api/v1/product/brand-status/${id}`, {
          status
        })
        .then((res) => {
          dispatch({
            type: BRAND_STATUS_SUCCESS,
            payload: res.data.updateStatus
          });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

// get tag success
export const getTagsSuccess = () => async (dispatch) => {
  try {
    await axios
      .get(`http://localhost:4040/api/v1/product/tag`)
      .then((res) => {
        dispatch({ type: GET_TAGS_SUCCESS, payload: res.data.tags });
      })
      .catch((error) => {
        dispatch({ type: GET_TAGS_FAILED, payload: error.message });
        console.log(error.message);
      });
  } catch (error) {
    console.log(error);
  }
};

// create new tag
export const createNewTag =
  ({ data, setInput, setModal }) =>
  async (dispatch) => {
    try {
      await axios
        .post(`http://localhost:4040/api/v1/product/tag`, data)
        .then((res) => {
          console.log(res.data);
          dispatch({ type: CREATE_TAG_SUCCESS, payload: res.data.createTag });
          setInput("");
          setModal(false);
        })
        .catch((error) =>
          dispatch({ type: CREATE_TAG_FAILED, payload: error.message })
        );
    } catch (error) {
      console.log(error.message);
    }
  };

// delete Tag
export const deleteTag = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`http://localhost:4040/api/v1/product/tag/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_TAG_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({ type: DELETE_TAG_FAILED, payload: error.message });
      });
  } catch (error) {
    console.log(error.message);
  }
};

// tag status update
export const tagStatusUpdate =
  ({ id, status }) =>
  async (dispatch) => {
    try {
      await axios
        .patch(`http://localhost:4040/api/v1/product/tag/${id}`, { status })
        .then((res) => [
          dispatch({
            type: TAG_STATUS_SUCCESS,
            payload: res.data.updateTagStatus
          })
        ]);
    } catch (error) {
      console.log(error.message);
    }
  };

// get all category
export const getAllCategory = () => async (dispatch) => {
  try {
    dispatch({ type: GET_CATEGORY_REQUEST });
    await axios
      .get(`http://localhost:4040/api/v1/product/category`)
      .then((res) => {
        dispatch({ type: GET_CATEGORY_SUCCESS, payload: res.data.categories });
      })
      .catch((error) => {
        dispatch({ type: GET_CATEGORY_FAILED, payload: error.message });
      });
  } catch (error) {
    console.log(error.message);
  }
};

// create category
export const createCategory = ({ data, setInput, setPhoto, setModal }) => async (dispatch) => {
  try {
    await axios
      .post(`http://localhost:4040/api/v1/product/category`, data)
      .then((res) => {
        dispatch({ type: CATEGORY_CREATE_SUCCESS, payload: res.data.category });
        setInput("")
        setPhoto(null)
        setModal(false)
      })
      .catch((error) => {
        dispatch({ type: CATEGORY_CREATE_FAILED, payload: error.message });
      });
  } catch (error) {
    console.log(error.message);
  }
};
