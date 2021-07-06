import { createApi } from 'unsplash-js';

export const api = createApi({
  accessKey: 'FZpIl7feLseFHwV4DScQqiaVULO54C7GRBiqlmDrxdI',
});

export const collectionApi = (page: number, perPage: number) =>
  api.collections.list({
    page,
    perPage,
  });

export const searchApi = ({
  searchQuery = '',
  page = 1,
  perPage = 30,
  color,
  orientation,
}: {
  searchQuery?: string;
  page?: number;
  perPage?: number;
  color?: any;
  orientation?: any;
}) =>
  api.search.getPhotos({
    query: searchQuery,
    color,
    orientation,
    perPage,
    page,
  });
