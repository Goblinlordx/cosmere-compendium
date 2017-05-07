import React from 'react';

const dummyProps = {
  series: [
    {
      id: 0,
      name: 'Mistborn',
      img: '/img/mistborn_cover.jpg',
      arcs: [
        {
          id: 1,
          name: 'Original Trilogy',
          books: [
            {
              id: 0,
              name: 'The Final Empire',
            },
            {
              id: 1,
              name: 'The Well of Ascension',
            },
            {
              id: 2,
              name: 'The Hero of Ages',
            },
          ],
        },
        {
          id: 2,
          name: 'Wax and Wayne',
          books: [
            {
              id: 3,
              name: 'The Alloy of Law',
            },
            {
              id: 4,
              name: 'Shadows of Self',
            },
            {
              id: 5,
              name: 'The Bands of Mourning',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Stormlight Archives',
      img: '/img/twok_cover.jpg',
      books: [
        {
          id: 6,
          name: 'The Way of Kings',
        },
        {
          id: 7,
          name: 'Words of Radiance',
        },
      ],
    },
  ],
};

const SeriesContainer = BaseComponent =>
  props => <BaseComponent {...dummyProps} {...props} />;

export default SeriesContainer;
