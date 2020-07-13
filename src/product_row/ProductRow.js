import React, {Component} from 'react';

class ProductRow extends Component {
    render() {
        const err = {color: 'red'};
        return (
            <tr>
                <td style={this.props.product.stocked ? {} : err}>{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

export default ProductRow;