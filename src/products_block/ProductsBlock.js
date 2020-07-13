import React, {Component} from 'react';
import ProductRow from "../product_row/ProductRow";

class ProductsBlock extends Component {
    // constructor(props) {
    //     super(props);
    //
    // }

    render() {
        const rows = this.props.arr.map((e) => <ProductRow key={e.name} product={e}/>);
        return (
            <tbody>
            <tr>
                <td><h3>{this.props.arr[0].category}</h3></td>
            </tr>
            {rows}
            </tbody>
        );
    }
}

export default ProductsBlock;