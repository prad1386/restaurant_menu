import React, { Component } from 'react';
import { connect } from 'react-redux';

class MealDetail extends Component {
    getOrderNum() {
        var order_no = localStorage.getItem("order_no");
        if (!order_no) {
            order_no = 0;
        } else {
            order_no = parseInt(order_no,10) + 1;
        }
        localStorage.setItem("order_no", order_no);
        return order_no;
    }

    render() {
        var selected_meal = JSON.parse(sessionStorage.getItem("selected_meal"));
        return (<div className="final-order">
            <img src={selected_meal.subcat_thumbnail} alt="choosed meal" />
            <label>{selected_meal.subcat_name}</label>
            <p>{selected_meal.subcat_price}</p>
            <h4>Your order number is : #{this.getOrderNum()}</h4>
            <a className="btn btn-success pull-right" href="/">New order</a>
        </div>);
    }
}

function mapStateToProps(state) {
    return {
        meal: state.activeMeal
    };
}


export default connect(mapStateToProps)(MealDetail);