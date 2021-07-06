import { createApi } from 'unsplash-js';
// @ts-ignore
export const api = createApi({
  accessKey: process.env.REACT_APP_ACCESS_KEY,
});

const STAR_WARS_COLLECTION_ID = '2423569';

export const collectionApi = () =>
  api.collections.getPhotos({
    collectionId: STAR_WARS_COLLECTION_ID,
  });

export const filterObject = (search) => {
  const { query, page, perPage, color, orientation, orderBy } = search;
  return {
    query,
    page,
    perPage,
    color,
    orientation,
    orderBy,
  };
};

export const searchApi = ({
  searchQuery = '',
  page = 1,
  perPage = 30,
  color,
  orientation,
  orderBy,
}: {
  searchQuery?: string;
  page?: number;
  perPage?: number;
  color?: any;
  orientation?: any;
  orderBy: any;
}) =>
  api.search.getPhotos({
    query: searchQuery,
    color,
    orientation,
    perPage,
    page,
    orderBy,
  });
