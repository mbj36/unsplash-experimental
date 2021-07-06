import React from 'react';
import { SearchInput, SearchDiv } from './Search.styles';

const Search = ({ fetchResults }) => {
  return (
    <SearchDiv>
      <SearchInput
        placeholder="Search for Images"
        onChange={(e) => fetchResults(e.target.value)}
      />
    </SearchDiv>
  );
};

export default Search;
