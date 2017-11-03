import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCategory } from '../actions/index';

/**
 * This is the smart component having access to the store, actions.
 * This will list the main categories when the component loads
 */
class CategoryList extends Component {

    /** This function will list all the main categories
     * selectCategory is the action which will triggered when category is clicked
     */
    createListItems() {
        return this.props.categories.map((category) => {
            return (
                <li id={`category_${category.cat_id}`} key={category.cat_id} onClick={() => this.props.selectCategory(category)}> <img className="categoryPic" src={category.cat_thumbnail} alt="category pic"/><div><label>{category.cat_name}</label><p>{category.cat_desc}</p></div></li>
            );
        });
    }
    render() {
        return (
            <ul className="category-list">
                {this.createListItems()}
            </ul>
        );
    }

}

/** This function helps component to have access to the store (state) as props 
 * category : selected category
*/
function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

/** This function binds the action creators to the this component and have them access as props 
 * selectCategory is the action when category is clicked
*/
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectCategory: selectCategory }, dispatch);
}

/** connect makes this component smart, connects the store actions to this component */
export default connect(mapStateToProps, matchDispatchToProps)(CategoryList);