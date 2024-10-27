import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroArticleComponant from '../components/HeroArticle/HeroArticle'
import { stripHTML } from '@/utils/strip';

const mockHeroArticle = {
  sideAsset: {
    url: 'https://example.com/image1.jpg',
    alt: 'Side asset image',
  },
  backgroundAsset: {
    url: 'https://example.com/image2.jpg',
    alt: 'Background asset image',
  },
  subtitle: 'This is a subtitle',
  title: 'Hero Article Title',
  publishingDate: '2024-10-26',
  author: 'John Doe',
};

it('renders HeroArticleComponant with correct content', () => {
    render(<HeroArticleComponant heroArticle={mockHeroArticle} />);
  
    expect(screen.getByText(stripHTML(mockHeroArticle.subtitle))).toBeInTheDocument();
  
    expect(screen.getByRole('heading', { name: /Hero Article Title/i })).toBeInTheDocument();
  
    expect(screen.getByText(mockHeroArticle.publishingDate)).toBeInTheDocument();
  
    expect(screen.getByText(/Author : John Doe/i)).toBeInTheDocument();
  
    expect(screen.getByAltText(mockHeroArticle.sideAsset.alt)).toBeInTheDocument();
    expect(screen.getByAltText(mockHeroArticle.backgroundAsset.alt)).toBeInTheDocument();
  });
  