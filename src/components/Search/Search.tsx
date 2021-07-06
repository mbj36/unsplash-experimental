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
  console.log(state);
  return (
    <>
      <SearchDiv>
        <SearchInput
          placeholder="Search for Images"
          onChange={(e) => fetchResults({ searchQuery: e.target.value })}
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
                ></RadioInput>
                <Label>Relevance</Label>
              </Div>
              <Div>
                <RadioInput
                  type="radio"
                  value="newest"
                  name="sort_by"
                ></RadioInput>
                <Label>Newest</Label>
              </Div>
            </VerticalStack>

            <VerticalStack>
              <Heading>COLOR</Heading>

              <Div>
                <RadioInput type="radio" value="null" name="color"></RadioInput>
                <Label>Any Color</Label>
              </Div>
              <Div>
                <RadioInput
                  type="radio"
                  value="black_and_white"
                  name="color"
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
                ></RadioInput>
                <Label>Any</Label>
              </Div>
              <Div>
                <RadioInput
                  type="radio"
                  value="landscape"
                  name="orientation"
                ></RadioInput>
                <Label>LandScape</Label>
              </Div>

              <Div>
                <RadioInput
                  type="radio"
                  value="portrait"
                  name="orientation"
                ></RadioInput>
                <Label>Portrait</Label>
              </Div>
              <Div>
                <RadioInput
                  type="radio"
                  value="squarish"
                  name="orientation"
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
