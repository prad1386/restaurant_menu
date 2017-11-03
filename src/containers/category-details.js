import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import jQuery from 'jquery';
import { selectMeal } from '../actions/meal_selected';

/**
 * This is the smart component having access to the store, actions.
 * This will list the sub categories after one of the main category is selected
 */
class CategoryDetail extends Component {

    /** This function will list all the sub categories under selected category */
    createListItems() {
        //This is used to give active class to the selected category
        jQuery('.active_cat').removeClass('active_cat');
        jQuery("#category_" + this.props.category.cat_id).addClass("active_cat");

        //Store the selected meal under sub category(sub menu) to get access in order page
        if(this.props.meal)
          sessionStorage.setItem("selected_meal", JSON.stringify(this.props.meal));

        //creates the sub category(sub menu) cards layout, selectMeal is the action triggered when meal card is clicked
        return this.props.category.sub_cat.map((meal, index) => {
            return (
                <div key={index} className="col-md-3 col-lg-3 col-sm-3 col-xs-3 cards" onClick={() => this.props.selectMeal(meal)}>
                <img src={meal.subcat_thumbnail} alt="meal pic" />
                <div style={{ padding: '5px' }}>
                    <label>{meal.subcat_name}</label>
                    <p>{meal.subcat_desc}</p>
                        <label style={{ right: '0', position: 'absolute', bottom: '0', marginRight: '20px',color: 'red'}}>{meal.subcat_price}</label>
                    </div>
                </div>
            );
        });
    }
    render() {
        //When none of the category is selected
        if (!this.props.category) {
            return (<div> <h2 ><strong>Choose your meal</strong></h2><hr /><i>An Amazing Fusion of Flavours. Super Convenient. Pick among the categories on left menu.</i></div>);
        }
        //When category is selected but not the sub category or meal
        if(!this.props.meal){
            return (
                <div className="meal-cards">
                    <h3 style={{ marginLeft: '20px', backgroundColor: '#f9f9f9', padding: '5px' }}><strong>{this.props.category.cat_name}</strong></h3>
                    {this.createListItems()}
                </div>
            );
        }else{
            return (
                <div className="meal-cards">
                    <h3 style={{ marginLeft: '20px',backgroundColor: '#f9f9f9', padding: '5px' }}><strong>{this.props.category.cat_name}</strong><span className="pull-right" style={{fontSize:'16px',color:'green'}}><strong>Selected meal : </strong>{this.props.meal.subcat_name}</span></h3>
                    <a className="btn btn-success pull-right" href="/order">Proceed</a>
                    {this.createListItems()}
                </div>
            );
        }
       
    }
}

/** This function helps component to have access to the store (state) as props 
 * category : selected category
 * meal : selected sub category
*/
function mapStateToProps(state) {
    return {
        category: state.activeCategory,
        meal: state.activeMeal
    };
}

/** This function binds the action creators to the this component and have them access as props 
 * selectMeal is the action when sub category is clicked
*/
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectMeal: selectMeal }, dispatch);
}

/** connect makes this component smart, connects the store actions to this component */
export default connect(mapStateToProps, matchDispatchToProps)(CategoryDetail);