import React from 'react';
import { GetServerSideProps } from 'next';
import styles from '../styles/article.module.css';
import path from 'path';
import fs from 'fs';
import CarouselImage from '@/components/Carousel/Carousel';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HeroArticleComponant from '@/components/HeroArticle/HeroArticle';
import { FooterProp } from '@/types/footer';
import { PageContent } from '@/types/article';
import { stripHTML } from '@/utils/strip';

export default function Article({
  heroArticle,
  paragraph,
  highLightedParagraph,
  carousel,
  finalParagraph,
  footer,
}: PageContent & FooterProp) {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.backDiv}>
            <button>
            <svg fill="#000000" viewBox="0 0 16 16" height="20px" width="20px">
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"
              />
            </svg>
            </button>
            <p>Back</p>
          </div>
          <HeroArticleComponant heroArticle={heroArticle} />
          <div className={styles.paragraphFlex}>
            <p className={styles.paragraph}>{stripHTML(paragraph.text)}</p>
            <div className={styles.highLightedParagraph}>
              <p>{stripHTML(highLightedParagraph.text)}</p>
            </div>
          </div>
          <CarouselImage items={carousel.items} />
          <div className={styles.paragraphFlex}>
            <div className={styles.finalParagraph}>
              <p>{stripHTML(finalParagraph.text)}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer footer={footer} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const filePath = path.join(process.cwd(), './src/data/article.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = await JSON.parse(jsonData);
  const heroArticle = data.content[0];
  const paragraph = data.content[1];
  const highLightedParagraph = data.content[2];
  const carousel = data.content[3];
  const finalParagraph = data.content[4];
  const footer = data.footer;
  return {
    props: {
      heroArticle: heroArticle,
      paragraph,
      highLightedParagraph,
      carousel,
      finalParagraph,
      footer,
    },
  };
};
