import React from 'react';
import Photo from '../Photo/Photo';
import { CollectionContainer, Text } from './Collections.styles';
import { CollectionType } from '../Photo/Photo.types';

const Collections = ({ collections }: { collections: CollectionType[] }) => {
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
          return <Photo photo={photo} key={photo.id} />;
        })}
    </CollectionContainer>
  );
};

export default Collections;
