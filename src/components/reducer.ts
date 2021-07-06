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
      const {
        searchQuery,
        page,
        perPage,
        orientation,
        color,
        orderBy,
      } = action.payload;

      console.log(action.payload);
      return {
        ...state,
        search: {
          param: searchQuery,
          page,
          perPage,
          orientation,
          color,
          orderBy,
        },
      };
    }

    case 'FETCH_SEARCH_RESULTS': {
      return {
        ...state,
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
    param: null,
    page: 1,
    perPage: 30,
    color: null,
    orientation: null,
    orderBy: null,
  },
};
