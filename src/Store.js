import React, {Component} from 'react';
import SearchBar from './search_bar/SearchBar';
import ProductTable from "./product_table/ProductTable";

class Store extends Component {

    constructor(props) {
        super(props);

        this.mock = [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];

        this.updateKeyword = this.updateKeyword.bind(this);
        this.updateStockOnly = this.updateStockOnly.bind(this);
        this.reRender = this.reRender.bind(this);

        this.keyword = '';
        this.stockedOnly = false;

        this.state = {
            currentData: this.mock,
            // keyword: '',
            // stockedOnly: false,
        };


    }


    render() {
        return (
            <div>
                <SearchBar handleInput={this.updateKeyword}
                           handleCheck={this.updateStockOnly}/>
                <ProductTable mock={this.state.currentData}/>
            </div>
        );
    }

    updateKeyword(keyword) {
        // this.setState({keyword:keyword});
        this.keyword = keyword;
        this.reRender();
    }

    updateStockOnly(stockedOnly) {
        // this.setState({stockedOnly:stockedOnly});
        this.stockedOnly = stockedOnly;
        this.reRender();
    }


    reRender() {
        const keyword = this.keyword;
        const stockedOnly = this.stockedOnly;

        let temp;

        if (keyword) {
            temp = this.mock.filter((e) => e.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
        } else {
            temp = this.mock;
        }

        //打勾则过滤掉库存不足的
        if (stockedOnly) {
            temp = temp.filter((e) => e.stocked === true);
        }

        this.setState({currentData: temp});
    }

}

export default Store;