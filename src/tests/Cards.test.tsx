import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cards from '@/components/Cards/Cards';

describe('Cards Component', () => {
  const mockCards = {
    type: 'CARD_GRID',
    title: 'Featured Cards',
    cards: [
      {
        type: 'CARD',
        title: 'Venice',
        subtitle: 'Italy',
        description: 'Explore the beautiful city of Venice.',
        backgroundAsset: {
          url: 'https://placehold.co/588x479/D1D3CA/D1D3CA',
          alt: 'Venice card image',
          type: 'image',
        },
        cta: {
          url: '/venice',
          text: 'Explore Venice',
          ariaLabel: 'explore venice button',
          target: '_blank',
        },
      },
      {
        type: 'CARD',
        title: 'Berlin',
        subtitle: 'Germany',
        description: 'Explore the beautiful city of Berlin.',
        backgroundAsset: {
          url: 'https://placehold.co/588x479/D1D3CA/D1D3CA',
          alt: 'Berlin card image',
          type: 'image',
        },
        cta: {
          url: '/berlin',
          text: 'Explore Berlin',
          ariaLabel: 'explore Berlin button',
          target: '_blank',
        },
      },
      {
        type: 'CARD',
        title: 'Tokyo',
        subtitle: 'Japan',
        description: 'Explore the beautiful city of Japan.',
        backgroundAsset: {
          url: 'https://placehold.co/588x479/D1D3CA/D1D3CA',
          alt: 'Japan card image',
          type: 'image',
        },
      },
    ],
  };

  it('renders correctly with provided props', () => {
    render(<Cards cards={mockCards} />);

    expect(screen.getByText('Venice')).toBeInTheDocument();
    expect(screen.getByText('Italy')).toBeInTheDocument();

    expect(screen.getByText('Tokyo')).toBeInTheDocument();
    expect(screen.getByText('Japan')).toBeInTheDocument();

    expect(screen.getByText('Berlin')).toBeInTheDocument();
    expect(screen.getByText('Germany')).toBeInTheDocument();
  });

  it('shows description on hover', () => {
    render(<Cards cards={mockCards} />);

    expect(
      screen.queryByText('Explore the beautiful city of Venice.')
    ).not.toBeInTheDocument();

    fireEvent.mouseEnter(screen.getAllByRole('img')[0]);

    expect(
      screen.getByText('Explore the beautiful city of Venice.')
    ).toBeInTheDocument();
  });

  it('renders CTA button with link if available', () => {
    render(<Cards cards={mockCards} />);

    fireEvent.mouseEnter(screen.getAllByRole('img')[0]);
    expect(screen.queryByRole('link')).toBeInTheDocument();
  });

  it('does not render CTA button if not available', () => {
    render(<Cards cards={mockCards} />);

    fireEvent.mouseEnter(screen.getAllByRole('img')[2]);
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });
});
