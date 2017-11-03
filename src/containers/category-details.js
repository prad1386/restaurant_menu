import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import jQuery from 'jquery';
import { selectMeal } from '../actions/meal_selected';

class CategoryDetail extends Component {
    createListItems() {
        jQuery('.active_cat').removeClass('active_cat');
        jQuery("#category_" + this.props.category.cat_id).addClass("active_cat");
        if(this.props.meal)
          sessionStorage.setItem("selected_meal", JSON.stringify(this.props.meal));

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
        if (!this.props.category) {
            return (<div> <h2 ><strong>Choose your meal</strong></h2><hr /><i>An Amazing Fusion of Flavours. Super Convenient. Pick among the categories on left menu.</i></div>);
        }
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

function mapStateToProps(state) {
    return {
        category: state.activeCategory,
        meal: state.activeMeal
    };
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectMeal: selectMeal }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CategoryDetail);