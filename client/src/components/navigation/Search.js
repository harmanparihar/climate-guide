import React, {Component} from 'react';

class Search extends Component {


    render() {
        return (
           <div className= "search-form">

                    <input
                        type="search"
                        className="search-field"
                        title="Enter a keyword..."
                        placeholder="Search"
                    />
                     <i className="fa fa-search"></i>
                    <button type="submit" className="search-submit"></button>
                </div>
        );
    }
}

export default Search;
