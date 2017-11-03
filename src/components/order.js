import React, { Component } from 'react';
import MealDetail from '../containers/meal-details';

/**
 * This is the secondary component as second view
 * Shows the meal selected under sub category in first view 
 */
class Order extends Component {
    render() {
        return (
            <div>
                <MealDetail />
            </div>);
    }
}

export default Order;