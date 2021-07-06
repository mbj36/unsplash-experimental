import React from 'react';
import Collections from '../../components/Collections/Collections';
import { AppStyles, SearchFilter } from './App.styles';
import Search from '../../components/Search/Search';
import Filters from '../../components/Filters/Filters';
import { useApp } from './useApp';

const App = () => {
  const { state, ref, fetchResultsFromSearchQuery } = useApp();
  return (
    <AppStyles>
      <SearchFilter>
        <Search fetchResults={fetchResultsFromSearchQuery} />
        <Filters />
      </SearchFilter>
      <Collections collections={state.collections} />
    </AppStyles>
  );
};

export default App;
