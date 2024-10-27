import Cards from '@/components/Cards/Cards';
type BannerAsset = {
  url: string;
  alt: string;
  type: string;
};

export type Banner = {
  type: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundAsset: BannerAsset;
  foregroundAsset: BannerAsset;
};

export type HomeBanner = {
  banner: Banner;
};

type Asset = {
  url: string;
  alt: string;
  type: string;
};

type Cta = {
  url: string;
  text: string;
  ariaLabel: string;
  target: string;
};

export type Card = {
  type: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundAsset: Asset;
  cta?: Cta;
};

export type Cards = {
  type: string;
  title: string;
  cards: Card[];
};

export type CardsProp = {
  cards: Cards;
};

// export type HomeProps = {
//   cards: Card[];
// }
