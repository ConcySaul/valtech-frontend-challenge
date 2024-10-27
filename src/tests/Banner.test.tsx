import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '@/components/Banner/Banner';

describe('Banner Component', () => {
  const mockBanner = {
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

  it('renders correctly with provided props', () => {
    render(<Banner banner={mockBanner} />);

    expect(screen.getByText('Valtech')).toBeInTheDocument();
    expect(screen.getByText('Welcome to Valtech!')).toBeInTheDocument();

    const foregroundImage = screen.getByAltText('foreground alt');
    expect(foregroundImage).toHaveAttribute('src', '/url');

    const backgroundImage = screen.getByAltText('background alt');
    expect(backgroundImage).toHaveAttribute('src', '/url');
  });
});
