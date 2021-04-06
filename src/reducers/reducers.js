export const ArticleReducer = (article = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "CREATE":
      return [...article, ...action.payload];
    default:
      return article;
  }
};
