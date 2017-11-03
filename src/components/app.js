import React, { Component } from 'react';
import CategoryList from '../containers/category-list';
import CategoryDetail from '../containers/category-details';
import Banner from '../images/cat_banner.jpg';

class App extends Component {
    render() {
        return (
            <div>
                <div className="col-md-2 col-lg-2 col-sm-2 col-xs-12 left-col">
                   <a href="/"> <img className="categorybanner" src={Banner} alt="Category banner" /></a>                   
                    <CategoryList/>
                </div>
                <div className="col-md-10 col-lg-10 col-sm-10 col-xs-12 right-col">
                    <CategoryDetail/>
                </div>
            </div>
        );
    }
}

export default App;