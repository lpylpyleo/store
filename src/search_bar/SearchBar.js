import React from "react";

function SearchBar() {
    return (
        <div>
            <input placeholder="Search..." onChange={(e) => this.props.handleInput(e.target.value)}/><br/>
            <label>
                <input type="checkbox" onChange={(event) => this.props.handleCheck(event.target.checked)}/>
                Only show products in stock.
            </label>
        </div>
    );
}

export default SearchBar;