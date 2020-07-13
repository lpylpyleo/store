import React from "react";

class SearchBar extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    // }

    render() {
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
    //
    // handleChange(e) {
    //
    // }
}

export default SearchBar;