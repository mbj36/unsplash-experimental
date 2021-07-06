import React from 'react';
import { PhotoContainer, Image } from './Photo.styles';

const Photo = ({ photo }: { photo: any }) => {
  return (
    <PhotoContainer>
      <Image
        src={photo.cover_photo?.urls.thumb || photo.urls.thumb}
        alt={photo.alt_description}
      />
    </PhotoContainer>
  );
};

export default Photo;
