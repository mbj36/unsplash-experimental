import { useReducer, useEffect, useState } from "react";
import { collectionApi, searchApi } from "../../lib/api";
import { reducer, initialState } from "../../components/reducer";

export const useApp = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchCollections();
    }, []);

    const fetchCollections = () => {
        setLoading(true);
        collectionApi().then(res => {
            dispatch({
                type: "GET_PHOTOS",
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
        setLoading(true);
        dispatch({
            type: "UPDATE_PARAMS",
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

        if (query === "") {
            fetchCollections();
        } else {
            searchApi({
                query,
                page,
                perPage,
                color,
                orientation,
                orderBy,
                contentFilter,
            }).then(res => {
                dispatch({
                    type: "FETCH_SEARCH_RESULTS",
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
            type: "CLEAR_FILTER",
        });
    };

    const clearSearch = () => {
        dispatch({
            type: "CLEAR_SEARCH",
        });
        fetchCollections();
    };

    const loadMoreData = results => {
        dispatch({
            type: "FETCH_MORE",
            payload: results,
        });
    };

    return {
        state,
        fetchResults,
        loading,
        clearFilters,
        clearSearch,
        loadMoreData,
    };
};
