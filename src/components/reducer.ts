export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PHOTOS': {
      return {
        ...state,
        collections: action.payload,
      };
    }
    // case 'FETCH_MORE': {
    //   return {
    //     ...state,
    //     search: {
    //       ...state.search,
    //       page: state.search.page + 1,
    //       perPage: state.search.perPage + 20,
    //     },
    //     collections: [...state.collections, ...action.payload],
    //   };
    // }

    case 'UPDATE_PARAMS': {
      const {
        query,
        page,
        perPage,
        orientation,
        color,
        orderBy,
        contentFilter,
      } = action.payload;

      return {
        ...state,
        search: {
          query: query,
          page,
          perPage,
          orientation,
          color,
          orderBy,
          contentFilter,
        },
      };
    }

    case 'FETCH_SEARCH_RESULTS': {
      return {
        ...state,
        collections: action.payload.results,
      };
    }

    case 'CLEAR_FILTER': {
      return {
        ...state,
        search: {
          ...initialState.search,
          query: state.search.query,
        },
      };
    }

    case 'CLEAR_SEARCH': {
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
    query: null,
    page: 1,
    perPage: 30,
    color: null,
    orientation: null,
    orderBy: null,
    contentFilter: null,
  },
};
