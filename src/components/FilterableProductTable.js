import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import { Container, Box } from '@material-ui/core';
import { flexbox } from '@material-ui/system';

class FilterableProductTable extends Component {
    state = {
        products: this.props.products.data,
        filteredProducts: this.props.products.data
    }

    filterProductsHandler = (inputFromSearchBar) => {
        let filteredProductsArray;
        if(inputFromSearchBar === ''){
            this.setState({
                filteredProducts: [...this.state.products]
            })
        } else {
            filteredProductsArray = this.state.products.filter(product => {
                return product.name.toLowerCase().includes(inputFromSearchBar.toLowerCase())
            })
            this.setState({
                filteredProducts: filteredProductsArray
            })
        }   
    }

    render(){
        return (
            <Container>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" marginBottom="2%">
                    <h1>IronStore</h1>
                    <SearchBar onFilter={this.filterProductsHandler}/>
                </Box>
                <ProductTable products={this.state.filteredProducts}/>
            </Container>
        )
    }
}

export default FilterableProductTable
