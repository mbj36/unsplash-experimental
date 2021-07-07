import React, { useState } from "react";
import Photo from "../Photo/Photo";
import { CollectionContainer, Text } from "./Collections.styles";
import { CollectionType } from "../Photo/Photo.types";

import Loader from "../Loading/Loading.styles";
import Modal from "../Modal/Modal";
import { useCollection } from "./useCollection";

const Collections = ({
    state,
    loading,
    loadMore,
}: {
    state: any;
    loading: boolean;
    loadMore: (results: any) => void;
}) => {
    const { collections } = state;

    const { ref, isOpen, setIsOpen, selected, setSelected } = useCollection(
        state,
        loadMore
    );

    if (loading) {
        return <Loader />;
    }

    if (!collections.length) {
        return (
            <CollectionContainer>
                <Text>No results!</Text>
            </CollectionContainer>
        );
    }

    return (
        <CollectionContainer ref={ref}>
            {collections &&
                collections.map((photo: CollectionType) => {
                    return (
                        <Photo
                            setIsOpen={setIsOpen}
                            setSelected={setSelected}
                            photo={photo}
                            key={photo.id}
                        />
                    );
                })}

            <Modal
                isOpen={isOpen}
                selected={selected}
                onClose={() => setIsOpen(false)}
            />
        </CollectionContainer>
    );
};

export default Collections;
