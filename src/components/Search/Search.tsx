import React, { useState } from 'react';
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

const Search = ({ fetchResults, clearResults, state }) => {
  const [showFilters, setShowFilters] = useState(false);

  const { search } = state;

  const filterObject = {
    searchQuery: search.query,
    page: search.page,
    perPage: search.perPage,
    color: search.color,
    orientation: search.orientation,
    orderBy: search.orderBy,
  };

  const isSearchQuery =
    state.search.query !== null && state.search.query !== '';

  return (
    <>
      <SearchDiv>
        <SearchInput
          placeholder="Search for Images"
          onChange={(e) =>
            fetchResults({ ...filterObject, searchQuery: e.target.value })
          }
          value={state.search.query || ''}
        />
        &emsp;
        {isSearchQuery && (
          <Button onClick={() => setShowFilters(!showFilters)}>Filters</Button>
        )}
      </SearchDiv>

      {showFilters && isSearchQuery && (
        <Filters>
          <Stack>
            {Object.keys(filtersData).map((ele) => {
              return (
                <VerticalStack>
                  <Heading>{filtersData[ele].title}</Heading>

                  {filtersData[ele].values.map((value) => {
                    return (
                      <Div>
                        <RadioInput
                          type="radio"
                          value={value.value}
                          name={filtersData[ele].value}
                          onChange={() =>
                            fetchResults({
                              ...filterObject,
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
                  clearResults();
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
