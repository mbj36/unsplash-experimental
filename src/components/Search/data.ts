export const filtersData = {
  orderBy: {
    title: 'SORT BY',
    value: 'orderBy',
    values: [
      {
        name: 'Relevance',
        value: 'relevance',
      },
      {
        name: 'Newest',
        value: 'newest',
      },
    ],
  },
  color: {
    title: 'COLOR',
    value: 'color',
    defaultSelected: null,
    values: [
      {
        name: 'Any',
        value: null,
      },
      {
        name: 'Black and white',
        value: 'black_and_white',
      },
    ],
  },
  orientation: {
    title: 'Orientation',
    value: 'orientation',
    defaultSelected: null,
    values: [
      {
        name: 'Any',
        value: null,
      },
      {
        name: 'LandScape',
        value: 'landscape',
      },
      {
        name: 'Portrait',
        value: 'portrait',
      },
      {
        name: 'Squarish',
        value: 'squarish',
      },
    ],
  },
  contentFilter: {
    title: 'Content Filter',
    value: 'contentFilter',
    defaultSelected: 'low',
    values: [
      {
        name: 'Low',
        value: 'low',
      },
      {
        name: 'High',
        value: 'high',
      },
    ],
  },
};
