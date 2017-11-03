import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * This is the smart component having access to the store, actions.
 * This will list the seelcted meal once the sub category under main category clicked
 */
class MealDetail extends Component {

    //This function is used to give the order number in the sequential order by access localStorage (just for poc)
    getOrderNum() {
        var order_no = localStorage.getItem("order_no");
        if (!order_no) {
            order_no = 0;
        } else {
            order_no = parseInt(order_no, 10) + 1;
        }
        //Store the order num back to localStorage
        localStorage.setItem("order_no", order_no);
        return order_no;
    }

    //Creates the order card in the final view
    render() {
        var selected_meal = JSON.parse(sessionStorage.getItem("selected_meal"));
        return (<div className="final-order">
            <img src={selected_meal.subcat_thumbnail} alt="choosed meal" />
            <label>{selected_meal.subcat_name}</label>
            <p>{selected_meal.subcat_price}</p>
            <h4>Your order number is : #{this.getOrderNum()}</h4>
            <a className="btn btn-success pull-right" href="/">New Order</a>
        </div>);
    }
}

/** This function helps component to have access to the store (state) as props 
 * meal : selected sub category
*/
function mapStateToProps(state) {
    return {
        meal: state.activeMeal
    };
}

/** connect makes this component smart, connects the store to this component */
export default connect(mapStateToProps)(MealDetail);