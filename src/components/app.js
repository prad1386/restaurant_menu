import React, { Component } from 'react';
import CategoryList from '../containers/category-list';
import CategoryDetail from '../containers/category-details';
import Banner from '../images/cat_banner.jpg';

/**
 * This is the main primary component as first view
 * Consist of two panels , left [lists main categories] and right [sub categories under main category]
 */
class App extends Component {
    render() {
        return (
            <div>
                {/** Bootstrap grid column for left panel*/}
                <div className="col-md-2 col-lg-2 col-sm-2 col-xs-12 left-col">
                    <a href="/"> <img className="categorybanner" src={Banner} alt="Category banner" /></a>
                    {/** Main category listing*/}
                    <CategoryList />
                </div>
                {/** Bootstrap grid column for right panel*/}
                <div className="col-md-10 col-lg-10 col-sm-10 col-xs-12 right-col">
                    {/** Sub category listing after one category is selected*/}
                    <CategoryDetail />
                </div>
            </div>
        );
    }
}

export default App;