import React from "react";
import Collections from "../../components/Collections/Collections";
import { AppStyles, Line } from "./App.styles";
import Search from "../../components/Search/Search";
import { useApp } from "./useApp";
import Navbar from "../../components/Navbar/Navbar";

const App = () => {
    const {
        state,
        fetchResults,
        clearFilters,
        loading,
        clearSearch,
        loadMoreData,
    } = useApp();
    return (
        <AppStyles>
            <Navbar />
            <Line />
            <Search
                state={state}
                clearFilters={clearFilters}
                clearSearch={clearSearch}
                fetchResults={fetchResults}
            />
            <Collections
                state={state}
                loadMore={loadMoreData}
                loading={loading}
            />
        </AppStyles>
    );
};

export default App;
