import * as api from "../api/sub-article";

export const fetchSubArticle = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSubArticle();
    dispatch({
      type: "FETCH",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createSubArticle = (subarticle) => async (dispatch) => {
  try {
    const { data } = await api.createSubArticle(subarticle);
    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
