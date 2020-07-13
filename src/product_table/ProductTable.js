import React, {Component} from 'react';
import ProductsBlock from "../products_block/ProductsBlock";



class ProductTable extends Component {

    render() {
        //---------------------------------------------------
        //不能写在constructor里，constructor只执行一次，会产生子组件不刷新的现象

        const mock = this.props.mock;

        let nameContainer = {}; // 针对键code进行归类的容器
        mock.forEach(item => {
            nameContainer[item.category] = nameContainer[item.category] || [];
            nameContainer[item.category].push(item);
        });

        let arrWrap = [];
        Object.keys(nameContainer).forEach(key => {
            arrWrap.push(nameContainer[key]);
        })
        //---------------------------------------------------


        const blocks = arrWrap.map((e) => <ProductsBlock key={e[0].category} arr={e}/>);

        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <td><h2>Name</h2></td>
                        <td><h2>Price</h2></td>
                    </tr>
                    </thead>
                    {blocks}
                </table>

            </div>
        );
    }
}

export default ProductTable;