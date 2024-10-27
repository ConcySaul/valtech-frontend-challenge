import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Article from '@/pages/article';

describe('Article Page', () => {
  const mockData = {
    heroArticle: {
      title: 'Hero Article Title',
      subtitle: 'Hero Article Subtitle',
      author: 'Author',
      publishingDate: '12/12/2012',
      backgroundAsset: {
        url: '/url',
        alt: 'an alt',
      },
      sideAsset: {
        url: '/url',
        alt: 'an alt',
      },
    },
    paragraph: {
      text: 'This is a paragraph.',
      highlight: false,
    },
    highLightedParagraph: {
      text: 'This is a highlighted paragraph.',
      highlight: true,
    },
    carousel: {
      items: [
        {
          url: 'image1.jpg',
          description: 'Image 1',
          alt: 'This is an alt',
        },
      ],
    },
    finalParagraph: {
      text: 'This is the final paragraph.',
      highlight: false,
    },
    footer: {
      text: 'Footer content.',
      background: '/url/background',
    },
  };

  it('renders correctly with provided props', () => {
    render(<Article {...mockData} />);

    expect(screen.getByText('Hero Article Title')).toBeInTheDocument();
    expect(screen.getByText('This is a paragraph.')).toBeInTheDocument();
    expect(
      screen.getByText('This is a highlighted paragraph.')
    ).toBeInTheDocument();
    expect(screen.getByAltText('This is an alt')).toBeInTheDocument();
    expect(
      screen.getByText('This is the final paragraph.')
    ).toBeInTheDocument();
    expect(screen.getByText('Footer content.')).toBeInTheDocument();
  });
});
