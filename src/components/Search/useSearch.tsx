import { useState } from 'react';

export const useSearch = (searchObject) => {
  const filterObject = {
    searchQuery: searchObject.query,
    page: searchObject.page,
    perPage: searchObject.perPage,
    color: searchObject.color,
    orientation: searchObject.orientation,
    orderBy: searchObject.orderBy,
  };

  const [showFilters, setShowFilters] = useState(false);
  const isSearchQuery =
    searchObject.query !== null && searchObject.query !== '';

  return {
    filterObject,
    showFilters,
    setShowFilters,
    isSearchQuery,
  };
};
