import React from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json'
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container>
      <FilterableProductTable products={ data }/>
    </Container>
  );
}

export default App;
