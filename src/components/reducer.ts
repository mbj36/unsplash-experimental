export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PHOTOS': {
      return {
        ...state,
        collections: action.payload,
      };
    }
    case 'FETCH_MORE': {
      return {
        ...state,
        search: {
          ...state.search,
          page: state.search.page + 1,
          perPage: state.search.perPage + 20,
        },
        collections: [...state.collections, ...action.payload],
      };
    }

    case 'UPDATE_PARAMS': {
      const { searchQuery, page, perPage, orientation, color } = action.payload;
      return {
        ...state,
        search: {
          param: searchQuery,
          page,
          perPage,
          orientation,
          color,
        },
      };
    }

    case 'FETCH_SEARCH_RESULTS': {
      return {
        ...state,
        search: {
          ...state.search,
          param: action.payload.searchQuery,
        },
        collections: action.payload.results,
      };
    }

    case 'CLEAR_RESULTS': {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export const initialState = {
  loading: false,
  collections: [],
  search: {
    param: '',
    page: 1,
    perPage: 30,
    color: '',
    orientation: '',
  },
};
