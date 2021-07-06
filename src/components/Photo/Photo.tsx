import React from 'react';
import { PhotoContainer, Image } from './Photo.styles';
import { CollectionType } from './Photo.types';

const Photo = ({
  photo,
  setSelected,
  setIsOpen,
}: {
  photo: CollectionType;
  setSelected: any;
  setIsOpen: any;
}) => {
  return (
    <PhotoContainer
      onClick={() => {
        setSelected(photo);
        setIsOpen(true);
      }}
    >
      <Image src={photo.urls.thumb} alt={photo.alt_description} />
    </PhotoContainer>
  );
};

export default Photo;
