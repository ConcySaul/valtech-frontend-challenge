import React from 'react';
import Link from 'next/link';
import styles from './Cards.module.css';
import { useState } from 'react';
import { CardsProp } from '@/types';
import { Card } from '@/types';

export default function Cards({ cards }: CardsProp) {
  const firstGroup = cards.cards.slice(0, 3);
  const secondGroup = cards.cards.slice(3, 6);
  const [hoveredIndexFirstGroup, setHoveredIndexFirstGroup] = useState<
    number | null
  >(null);
  const [hoveredIndexSecondGroup, setHoveredIndexSecondGroup] = useState<
    number | null
  >(null);
  return (
    <>
      <div className={styles.flexContainer}>
        {firstGroup.map((card: Card, index) => (
          <div
            onMouseEnter={() => setHoveredIndexFirstGroup(index)}
            onMouseLeave={() => setHoveredIndexFirstGroup(null)}
            key={index}
            className={
              index === 0
                ? `${styles.mediumCard} ${styles.item}`
                : `${styles.smallCard} ${styles.item}`
            }
          >
            <div
              className={
                hoveredIndexFirstGroup === index
                  ? `${styles.cardInfo} ${styles.hoveredCardInfo}`
                  : styles.cardInfo
              }
            >
              <h4>{card.subtitle}</h4>
              <h3>{card.title}</h3>
            </div>
            {hoveredIndexFirstGroup === index && <p>{card.description}</p>}
            {hoveredIndexFirstGroup === index && card.cta ? (
              <Link
                href={card.cta?.url || '/'}
                target={card.cta?.target || '_self'}
              >
                <button className={styles.actionButton}>Explore More</button>
              </Link>
            ) : (
              <button className={styles.actionButton}>Explore More</button>
            )}
            <img
              src={card.backgroundAsset.url}
              alt={card.backgroundAsset.alt}
            />
          </div>
        ))}
      </div>

      <div className={styles.flexContainer}>
        {secondGroup.map((card, index) => (
          <div
            onMouseEnter={() => setHoveredIndexSecondGroup(index)}
            onMouseLeave={() => setHoveredIndexSecondGroup(null)}
            key={index}
            className={
              index !== 2
                ? `${styles.smallCard} ${styles.item}`
                : `${styles.mediumCard} ${styles.item}`
            }
          >
            <img
              src={card.backgroundAsset.url}
              alt={card.backgroundAsset.alt}
            />
            <div
              className={
                hoveredIndexSecondGroup === index
                  ? `${styles.cardInfo} ${styles.hoveredCardInfo}`
                  : styles.cardInfo
              }
            >
              <h4>{card.subtitle}</h4>
              <h3>{card.title}</h3>
            </div>
            {hoveredIndexSecondGroup === index && <p>{card.description}</p>}
            {hoveredIndexSecondGroup === index && card.cta ? (
              <Link
                href={card.cta?.url || '/'}
                target={card.cta?.target || '_self'}
              >
                <button className={styles.actionButton}>Explore More</button>
              </Link>
            ) : (
              <button className={styles.actionButton}>Explore More</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
