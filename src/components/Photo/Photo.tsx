import React from 'react';
import { PhotoContainer, Image } from './Photo.styles';
import { CollectionType } from './Photo.types';

const Photo = ({ photo }: { photo: CollectionType }) => {
  return (
    <PhotoContainer>
      <Image src={photo.urls.thumb} alt={photo.alt_description} />
    </PhotoContainer>
  );
};

export default Photo;
