import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCategory } from '../actions/index';

class CategoryList extends Component {
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

function mapStateToProps(state) {
    return {
        categories: state.categories
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectCategory: selectCategory }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CategoryList);