export const SubArticle = (state=[], action){
    switch (action.type) {
        case "FETCH":
            return action.payload;
            case "CREATE":
              return [...article, ...action.payload]; 
        default:
            return state;
    }
}