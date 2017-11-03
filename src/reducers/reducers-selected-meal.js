/**
 * 
 */
export default (state=null, action) => {
switch(action.type){
    case "MEAL_SELECTED":
    return action.payload;
    default:
    return state;
}
return state;
}