import { useState } from "react";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { searchApi } from "../../lib/api";

export const useCollection = (state, loadMore) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const ref = useInfiniteScroll({
        onBottom: () => {
            if (state.search.query !== null && state.search.query !== "") {
                searchApi({
                    ...state.search,
                    page: state.search.page + 1,
                }).then(res => {
                    loadMore(res.response?.results);
                });
            }
        },
    });

    return {
        ref,
        isOpen,
        setIsOpen,
        selected,
        setSelected,
    };
};
