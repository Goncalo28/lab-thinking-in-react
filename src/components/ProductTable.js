import React from 'react'
import ProductRow from './ProductRow'
import { Table, TableRow, TableCell, TableContainer } from '@material-ui/core';

const ProductTable = props => {
    return (
        <TableContainer>
            <Table>
                <TableRow>
                    <TableCell style={{backgroundColor: 'orange', color: 'black'}}><h2>Name</h2></TableCell>
                    <TableCell style={{backgroundColor: 'orange', color: 'black'}}><h2>Price</h2></TableCell>
                </TableRow>
                <ProductRow products={props.products}/>
            </Table>
        </TableContainer>
    );
}

export default ProductTable;
