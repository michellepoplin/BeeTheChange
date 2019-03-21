import React from "react";

function SearchResults(props) {
    return (this.props.items.map(item => (<div>${item.farmer}</div>)));
}

export default SearchResults;
