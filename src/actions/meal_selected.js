export const selectMeal = (meal) => {
    return {
        type: 'MEAL_SELECTED',
        payload: meal
    }

}