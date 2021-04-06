import * as api from "../api/index";

export const fetchArticles = () => async (dispatch) => {
  try {
    const { data } = await api.fetchArticles();
    dispatch({
      type: "FETCH",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createArticles = (article) => async (dispatch) => {
  try {
    const { data } = await api.createArticles(article);
    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
