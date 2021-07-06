import { createApi } from 'unsplash-js';

export const api = createApi({
  accessKey: 'FZpIl7feLseFHwV4DScQqiaVULO54C7GRBiqlmDrxdI',
});

export const collectionApi = ({
  page,
  perPage,
}: {
  page: number;
  perPage: number;
}) => api.collections.getPhotos({ collectionId: '2423569', perPage, page });

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
