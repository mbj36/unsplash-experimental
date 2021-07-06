import { useReducer, useEffect } from 'react';
import { collectionApi, searchApi } from '../../lib/api';
import { reducer, initialState } from '../../components/reducer';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

export const useApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { search } = state;

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = () => {
    collectionApi(search.page, search.perPage).then((res) => {
      dispatch({
        type: 'GET_PHOTOS',
        payload: res.response?.results,
      });
    });
  };

  const fetchResultsFromSearchQuery = (searchQuery: string) => {
    if (searchQuery === '') {
      fetchCollections();
    } else {
      searchApi({ searchQuery }).then((res) => {
        dispatch({
          type: 'FETCH_SEARCH_RESULTS',
          payload: {
            searchQuery,
            results: res.response?.results,
          },
        });
      });
    }
  };

  const ref = useInfiniteScroll({
    onBottom: () => {
      collectionApi(search.page + 1, search.perPage).then((res) => {
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
    fetchResultsFromSearchQuery,
  };
};
