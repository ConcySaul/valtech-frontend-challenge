import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CarouselImage from '@/components/Carousel/Carousel';

const mockItems = [
  {
    url: 'https://example.com/image1.jpg',
    alt: 'Image 1',
    description: 'Description 1',
  },
  {
    url: 'https://example.com/image2.jpg',
    alt: 'Image 2',
    description: 'Description 2',
  },
  {
    url: 'https://example.com/image3.jpg',
    alt: 'Image 3',
    description: 'Description 3',
  },
];

describe('CarouselImage', () => {
  it('renders the first image and description initially', () => {
    render(<CarouselImage items={mockItems} />);
    
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
  });

  it('navigates to the next image when the next button is clicked', async () => {
    render(<CarouselImage items={mockItems} />);

    fireEvent.click(screen.getByRole('button', { name: /right arrow/i }));

    await waitFor(() => {
      expect(screen.getByAltText('Image 2')).toBeInTheDocument();
      expect(screen.getByText('Description 2')).toBeInTheDocument();
    });
  });

  it('navigates to the previous image when the previous button is clicked', async () => {
    render(<CarouselImage items={mockItems} />);

    fireEvent.click(screen.getByRole('button', { name: /right arrow/i }));

    fireEvent.click(screen.getByRole('button', { name: /left arrow/i }));

    await waitFor(() => {
      expect(screen.getByAltText('Image 1')).toBeInTheDocument();
      expect(screen.getByText('Description 1')).toBeInTheDocument();
    });
  });

  it('loops back to the first image after the last image', async () => {
    render(<CarouselImage items={mockItems} />);

    fireEvent.click(screen.getByRole('button', { name: /right arrow/i }));
    fireEvent.click(screen.getByRole('button', { name: /right arrow/i }));

    fireEvent.click(screen.getByRole('button', { name: /right arrow/i }));

    await waitFor(() => {
      expect(screen.getByAltText('Image 1')).toBeInTheDocument();
      expect(screen.getByText('Description 1')).toBeInTheDocument();
    });
  });

  it('applies transition classes correctly', async () => {
    render(<CarouselImage items={mockItems} />);

    expect(screen.getByAltText('Image 1')).toHaveClass('fadeIn');

    fireEvent.click(screen.getByRole('button', { name: /right arrow/i }));

    await waitFor(() => {
      expect(screen.getByAltText('Image 2')).toHaveClass('fadeIn');
    });
  });
});
