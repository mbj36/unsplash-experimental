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

export const searchApi = ({
  query = '',
  page = 1,
  perPage = 30,
  color,
  orientation,
  orderBy,
  contentFilter,
}: {
  query?: string;
  page?: number;
  perPage?: number;
  color?: any;
  orientation?: any;
  orderBy: any;
  contentFilter: any;
}) =>
  api.search.getPhotos({
    query,
    color,
    orientation,
    perPage,
    page,
    orderBy,
    contentFilter,
  });
