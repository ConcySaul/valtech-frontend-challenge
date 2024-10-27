type Asset = {
  url: string;
  alt: string;
};

export type HeroArticle = {
  title: string;
  subtitle: string;
  author: string;
  publishingDate: string;
  backgroundAsset: Asset;
  sideAsset: Asset;
};

type Paragraph = {
  highlight: boolean;
  text: string;
};

type CarouselItem = {
  url: string;
  alt: string;
  description: string;
};

export type CarouselType = {
  items: CarouselItem[];
};

export type HeroArticleProp = {
  heroArticle: HeroArticle;
};

export type PageContent = {
  heroArticle: HeroArticle;
  paragraph: Paragraph;
  highLightedParagraph: Paragraph;
  carousel: CarouselType;
  finalParagraph: Paragraph;
};
