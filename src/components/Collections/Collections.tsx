import React from 'react';
import Photo from '../Photo/Photo';
import { CollectionContainer } from './Collections.styles';

const Collections = ({ collections }: { collections: any }) => {
  return (
    <CollectionContainer>
      {collections &&
        collections.map((photo: any) => {
          return <Photo photo={photo} key={photo.id} />;
        })}
    </CollectionContainer>
  );
};

export default Collections;
