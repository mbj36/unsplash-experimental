import React from 'react';
import {
  SearchInput,
  SearchDiv,
  Button,
  Filters,
  Stack,
  VerticalStack,
  Heading,
  RadioInput,
  Div,
  Label,
} from './Search.styles';
import { filtersData } from './data';
import { useSearch } from './useSearch';

const Search = ({ fetchResults, clearFilters, state, clearSearch }) => {
  const { search } = state;
  const { showFilters, setShowFilters, isSearchQuery } = useSearch(search);

  return (
    <>
      <SearchDiv>
        <SearchInput
          placeholder="Search for Images"
          onChange={(e) => fetchResults({ ...search, query: e.target.value })}
          value={state.search.query || ''}
        />
        {isSearchQuery && (
          <>
            &emsp;
            <Button
              onClick={() => {
                setShowFilters(false);
                clearSearch();
              }}
            >
              Clear
            </Button>
          </>
        )}

        {isSearchQuery && (
          <>
            &emsp;
            <Button onClick={() => setShowFilters(!showFilters)}>
              Filters
            </Button>
          </>
        )}
      </SearchDiv>

      {showFilters && isSearchQuery && (
        <Filters>
          <Stack>
            {Object.keys(filtersData).map((ele, index) => {
              return (
                <VerticalStack key={index}>
                  <Heading>{filtersData[ele].title}</Heading>

                  {filtersData[ele].values.map((value, index) => {
                    return (
                      <Div key={index}>
                        <RadioInput
                          type="radio"
                          value={value.value}
                          name={filtersData[ele].value}
                          defaultChecked={value.value === null}
                          onChange={() =>
                            fetchResults({
                              ...search,
                              [filtersData[ele].value]: value.value,
                            })
                          }
                        />
                        <Label>{value.name}</Label>
                      </Div>
                    );
                  })}
                </VerticalStack>
              );
            })}

            <VerticalStack>
              <Button
                onClick={() => {
                  setShowFilters(false);
                  clearFilters();
                }}
              >
                Clear Filters
              </Button>
            </VerticalStack>
          </Stack>
        </Filters>
      )}
    </>
  );
};

export default Search;
