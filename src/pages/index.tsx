import React from 'react';
import styles from '../styles/index.module.css';
import type { GetServerSideProps } from 'next';
import path from 'path';
import fs from 'fs';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Banner from '@/components/Banner/Banner';
import Cards from '@/components/Cards/Cards';
import { CardsProp, HomeBanner } from '@/types';
import { FooterProp } from '@/types/footer';

export default function Index({
  footer,
  banner,
  cards,
}: FooterProp & HomeBanner & CardsProp) {
  return (
    <>
      <Header />
        <section className={styles.section}>
          <Banner banner={banner} />
        </section>

        <section className={styles.section}>
          <h2 className={styles.cardTitle}>{cards.title}</h2>
          <Cards cards={cards} />
        </section>
      <Footer footer={footer} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const filePath = path.join(process.cwd(), './src/data/index.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = await JSON.parse(jsonData);
  const cards = data.content[1];
  const banner = data.content[0];
  const footer = data.footer;
  return {
    props: {
      cards: cards,
      banner: banner,
      footer: footer,
    },
  };
};
