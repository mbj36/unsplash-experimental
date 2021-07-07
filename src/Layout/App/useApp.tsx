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
    query,
    page,
    perPage,
    color,
    orientation,
    orderBy,
    contentFilter,
  }) => {
    dispatch({
      type: 'UPDATE_PARAMS',
      payload: {
        query,
        page,
        perPage,
        color,
        orientation,
        orderBy,
        contentFilter,
      },
    });

    if (query === '') {
      fetchCollections();
    } else {
      setLoading(true);
      searchApi({
        query,
        page,
        perPage,
        color,
        orientation,
        orderBy,
        contentFilter,
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
