import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '@/pages/index';
import { Footer } from '@/types/footer';
import { HomeBanner, CardsProp, Banner, Cards } from '@/types';

jest.mock('@/components/Header/Header', () => () => <header>Header</header>);
jest.mock('@/components/Footer/Footer', () => () => <footer>Footer</footer>);
jest.mock('@/components/Banner/Banner', () => ({ banner }: HomeBanner) => (
  <>
    {' '}
    <div>{banner.title}</div> <div>{banner.description}</div>{' '}
  </>
));
jest.mock('@/components/Cards/Cards', () => ({ cards }: CardsProp) => (
  <>
    {' '}
    <div>{cards.cards[0].title}</div> <div>{cards.cards[0].subtitle}</div>{' '}
    <div>{cards.cards[0].description}</div>
  </>
));

describe('Home Page', () => {
  const mockFooter: Footer = {
    background: '/url',
    text: 'Footer',
  };

  const mockBanner: Banner = {
    title: 'Valtech',
    type: 'A Certain Banner Type',
    subtitle: 'Banner Subtitle',
    description: 'Welcome to Valtech!',
    backgroundAsset: {
      url: '/url',
      alt: 'background alt',
      type: 'background type',
    },
    foregroundAsset: {
      url: '/url',
      alt: 'foreground alt',
      type: 'foreground type',
    },
  };

  const mockCards: Cards = {
    type: 'CARD_GRID',
    title: 'Valtech Offices',
    cards: [
      {
        type: 'CARD',
        title: 'Venice',
        subtitle: 'Italy',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit in turpis eu volutpat. Quisque pellentesque scelerisque nisl, sit amet convallis orci convallis sit amet. Nam a neque dolor',
        backgroundAsset: {
          url: 'https://placehold.co/588x479/D1D3CA/D1D3CA',
          alt: 'Venice card image',
          type: 'image',
        },
        cta: {
          url: '/article',
          text: 'Explore More',
          ariaLabel: 'explore more button',
          target: '_blank',
        },
      },
    ],
  };

  it('renders correctly with provided props', () => {
    render(<Index footer={mockFooter} banner={mockBanner} cards={mockCards} />);

    expect(screen.getByText('Valtech')).toBeInTheDocument();
    expect(screen.getByText('Welcome to Valtech!')).toBeInTheDocument();
    expect(screen.getByText('Valtech Offices')).toBeInTheDocument();
    expect(screen.getByText('Venice')).toBeInTheDocument();
    expect(screen.getByText('Italy')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit in turpis eu volutpat. Quisque pellentesque scelerisque nisl, sit amet convallis orci convallis sit amet. Nam a neque dolor'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
