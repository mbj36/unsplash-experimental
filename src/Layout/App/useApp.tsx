import { useReducer, useEffect, useState } from 'react';
import { collectionApi, searchApi } from '../../lib/api';
import { reducer, initialState } from '../../components/reducer';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

export const useApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const { search } = state;

  useEffect(() => {
    fetchCollections();
  }, []);

  const fetchCollections = () => {
    setLoading(true);
    collectionApi(search.page, search.perPage).then((res) => {
      dispatch({
        type: 'GET_PHOTOS',
        payload: res.response?.results,
      });

      setLoading(false);
    });
  };

  const fetchResults = ({ searchQuery, page, perPage, color, orientation }) => {
    dispatch({
      type: 'UPDATE_QUERY',
      payload: {
        searchQuery,
        page,
        perPage,
        color,
        orientation,
      },
    });

    if (searchQuery === '') {
      fetchCollections();
    } else {
      setLoading(true);
      searchApi({ searchQuery, page, perPage, color, orientation }).then(
        (res) => {
          dispatch({
            type: 'FETCH_SEARCH_RESULTS',
            payload: {
              searchQuery,
              results: res.response?.results,
            },
          });
        }
      );
      setLoading(false);
    }
  };

  const clearResults = () => {
    dispatch({
      type: 'CLEAR_RESULTS',
      payload: initialState,
    });
    fetchCollections();
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
    fetchResults,
    loading,
    clearResults,
  };
};
