import React from 'react'
import { TableBody, TableRow, TableCell } from '@material-ui/core';

const ProductRow = props =>  {
    return (
        <TableBody>
            {props.products.map((product) => 
                <TableRow>
                    {
                    product.stocked ? 
                    <TableCell>{product.name}</TableCell> : 
                    <TableCell style={{color: 'red'}}>{product.name}</TableCell>
                    }
                    <TableCell>{product.price}</TableCell>
                </TableRow>
            )}
        </TableBody>
    );
}

export default ProductRow;
