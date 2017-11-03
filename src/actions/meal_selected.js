/** 
 * Action creators are functions that create objects, actions are the objects that get created.
 * This action creator is triggered when one of the sub category is clicked. 
 * Type describes the action that occurred : BUTTON_CLICKED
 * Payload is *(optional)* any extra data that is needed : returns the sub category clicked
*/
export const selectMeal = (meal) => {
    return {
        type: 'MEAL_SELECTED',
        payload: meal
    }

}