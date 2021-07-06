import React, { useState } from 'react';
import Photo from '../Photo/Photo';
import { CollectionContainer, Text } from './Collections.styles';
import { CollectionType } from '../Photo/Photo.types';
import Loader from '../Loading/Loading.styles';
import Modal from '../Modal/Modal';

const Collections = ({
  collections,
  loading,
}: {
  collections: CollectionType[];
  loading: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
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
    <CollectionContainer>
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
