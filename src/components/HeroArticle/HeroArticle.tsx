import React from 'react';
import { stripHTML } from '@/utils/strip';
import { HeroArticleProp } from '../../types/article';
import styles from './HeroArticle.module.css';

export default function HeroArticleComponant({ heroArticle }: HeroArticleProp) {
  return (
    <>
      <div className={styles.heroContainerFlex}>
        <div className={styles.heroItem}>
          <img
            src={heroArticle.sideAsset.url}
            alt={heroArticle.sideAsset.alt}
          />
        </div>
        <div className={styles.heroItem}>
          <div className={styles.heroArticleText}>
            <h4>{stripHTML(heroArticle.subtitle)}</h4>
            <h1>{heroArticle.title}</h1>
          </div>
          <img
            src={heroArticle.backgroundAsset.url}
            alt={heroArticle.backgroundAsset.alt}
          />
        </div>
      </div>
      <div className={styles.heroContainerFlex}>
        <p>{heroArticle.publishingDate}</p>
        <p className={styles.author}>Author : {heroArticle.author}</p>
      </div>
    </>
  );
}
