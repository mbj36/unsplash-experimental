import { useState } from 'react';

export const useSearch = (searchObject) => {
  const [showFilters, setShowFilters] = useState(false);
  const isSearchQuery =
    searchObject.query !== null && searchObject.query !== '';

  return {
    showFilters,
    setShowFilters,
    isSearchQuery,
  };
};
