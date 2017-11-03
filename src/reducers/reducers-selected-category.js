/**
 * 
 */
export default (state=null, action) => {
switch(action.type){
    case "CATEGORY_SELECTED":
    return action.payload;
    default:
    return state;
}
return state;
}