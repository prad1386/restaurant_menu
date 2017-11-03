/** 
 * Action creators are functions that create objects, actions are the objects that get created.
 * This action creator is triggered when one of the category is clicked. 
 * Type describes the action that occurred : BUTTON_CLICKED
 * Payload is *(optional)* any extra data that is needed : returns the clicked category
*/
export const selectCategory = (category) => {
    return {
        type: 'CATEGORY_SELECTED',
        payload: category
    }

}