import React from 'react';
import Photo from '../Photo/Photo';
import { CollectionContainer, Text } from './Collections.styles';
import { CollectionType } from '../Photo/Photo.types';
import Loader from '../Loading/Loading.styles';

const Collections = ({
  collections,
  loading,
}: {
  collections: CollectionType[];
  loading: boolean;
}) => {
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
          return <Photo photo={photo} key={photo.id} />;
        })}
    </CollectionContainer>
  );
};

export default Collections;
