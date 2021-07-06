import React from 'react';
import Collections from '../../components/Collections/Collections';
import { AppStyles, Line } from './App.styles';
import Search from '../../components/Search/Search';
import { useApp } from './useApp';
import Navbar from '../../components/Navbar/Navbar';

const App = () => {
  const { state, fetchResults, clearResults } = useApp();
  return (
    <AppStyles>
      <Navbar />
      <Line />
      <Search
        state={state}
        clearResults={clearResults}
        fetchResults={fetchResults}
      />
      <Collections collections={state.collections} />
    </AppStyles>
  );
};

export default App;
