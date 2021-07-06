import React from 'react';
import Collections from '../../components/Collections/Collections';
import { AppStyles, Line } from './App.styles';
import Search from '../../components/Search/Search';
import { useApp } from './useApp';
import Navbar from '../../components/Navbar/Navbar';

const App = () => {
  const { state, fetchResults, clearFilters, loading, clearSearch } = useApp();
  return (
    <AppStyles>
      <Navbar />
      <Line />
      <Search
        state={state}
        clearFilters={clearFilters}
        clearSearch={clearSearch}
        fetchResults={fetchResults}
      />
      <Collections loading={loading} collections={state.collections} />
    </AppStyles>
  );
};

export default App;
