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

const Search = ({ fetchResults, clearResults, state }) => {
  const [showFilters, setShowFilters] = useState(false);

  const { search } = state;

  console.log(state);

  const filterObject = {
    searchQuery: search.param,
    page: search.page,
    perPage: search.perPage,
    color: search.color,
    orientation: search.orientation,
    orderBy: search.orderBy,
  };
  return (
    <>
      <SearchDiv>
        <SearchInput
          placeholder="Search for Images"
          onChange={(e) =>
            fetchResults({ ...filterObject, searchQuery: e.target.value })
          }
          value={state.search.param}
        />

        <Button onClick={() => setShowFilters(!showFilters)}>Filters</Button>
      </SearchDiv>
      {showFilters && (
        <Filters>
          <Stack>
            <VerticalStack>
              <Heading>SORT BY</Heading>

              <Div>
                <RadioInput
                  type="radio"
                  value="relevance"
                  name="sort_by"
                  onChange={() =>
                    fetchResults({ ...filterObject, orderBy: 'relevance' })
                  }
                ></RadioInput>
                <Label>Relevance</Label>
              </Div>
              <Div>
                <RadioInput
                  type="radio"
                  value="newest"
                  name="sort_by"
                  onChange={() =>
                    fetchResults({ ...filterObject, orderBy: 'newest' })
                  }
                ></RadioInput>
                <Label>Newest</Label>
              </Div>
            </VerticalStack>

            <VerticalStack>
              <Heading>COLOR</Heading>

              <Div>
                <RadioInput
                  defaultChecked={search.color === null}
                  type="radio"
                  value="null"
                  name="color"
                  onChange={() =>
                    fetchResults({ ...filterObject, color: 'null' })
                  }
                ></RadioInput>
                <Label>Any Color</Label>
              </Div>
              <Div>
                <RadioInput
                  type="radio"
                  value="black_and_white"
                  name="color"
                  onChange={() =>
                    fetchResults({ ...filterObject, color: 'black_and_white' })
                  }
                ></RadioInput>
                <Label>Black and White</Label>
              </Div>
            </VerticalStack>

            <VerticalStack>
              <Heading>ORIENTATION</Heading>

              <Div>
                <RadioInput
                  type="radio"
                  value="null"
                  name="orientation"
                  defaultChecked={search.orientation === null}
                  onChange={() =>
                    fetchResults({ ...filterObject, orientation: null })
                  }
                ></RadioInput>
                <Label>Any</Label>
              </Div>
              <Div>
                <RadioInput
                  type="radio"
                  value="landscape"
                  name="orientation"
                  onChange={() =>
                    fetchResults({ ...filterObject, orientation: 'landscape' })
                  }
                ></RadioInput>
                <Label>LandScape</Label>
              </Div>

              <Div>
                <RadioInput
                  type="radio"
                  value="portrait"
                  name="orientation"
                  onChange={() =>
                    fetchResults({ ...filterObject, orientation: 'portrait' })
                  }
                ></RadioInput>
                <Label>Portrait</Label>
              </Div>
              <Div>
                <RadioInput
                  type="radio"
                  value="squarish"
                  name="orientation"
                  onChange={() =>
                    fetchResults({ ...filterObject, orientation: 'squarish' })
                  }
                ></RadioInput>
                <Label>Square</Label>
              </Div>
            </VerticalStack>

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
