import { useReducer, useEffect, useState } from 'react';
import { collectionApi, searchApi } from '../../lib/api';
import { reducer, initialState } from '../../components/reducer';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

export const useApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = () => {
    setLoading(true);
    collectionApi().then((res) => {
      dispatch({
        type: 'GET_PHOTOS',
        payload: res.response?.results,
      });

      setLoading(false);
    });
  };

  const fetchResults = ({
    searchQuery,
    page,
    perPage,
    color,
    orientation,
    orderBy,
  }) => {
    dispatch({
      type: 'UPDATE_PARAMS',
      payload: {
        searchQuery,
        page,
        perPage,
        color,
        orientation,
        orderBy,
      },
    });

    if (searchQuery === '') {
      fetchCollections();
    } else {
      setLoading(true);
      searchApi({
        searchQuery,
        page,
        perPage,
        color,
        orientation,
        orderBy,
      }).then((res) => {
        dispatch({
          type: 'FETCH_SEARCH_RESULTS',
          payload: {
            results: res.response?.results,
          },
        });
      });
      setLoading(false);
    }
  };

  const clearFilters = () => {
    dispatch({
      type: 'CLEAR_FILTER',
    });
    fetchCollections();
  };

  const clearSearch = () => {
    dispatch({
      type: 'CLEAR_SEARCH',
    });
    fetchCollections();
  };

  const ref = useInfiniteScroll({
    onBottom: () => {
      collectionApi().then((res) => {
        dispatch({
          type: 'FETCH_MORE',
          payload: res.response?.results,
        });
      });
    },
  });

  return {
    state,
    ref,
    fetchResults,
    loading,
    clearFilters,
    clearSearch,
  };
};
