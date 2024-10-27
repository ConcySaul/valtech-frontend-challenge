import React from 'react';
import { useState } from 'react';
import styles from './Carousel.module.css';
import { CarouselType } from '@/types/article';

export default function CarouselImage({ items }: CarouselType) {
  const [carouselIndex, setCarouselIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleTransition = async () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleNextImage = async () => {
    if (carouselIndex === items.length - 1) {
      setCarouselIndex(() => {
        return 0
      });
    } else {
      setCarouselIndex((prev) => {
        return prev + 1;
      });
    }
    await handleTransition();
  };

  const handlePreviousImage = async () => {
    if (carouselIndex === 0) {
      setCarouselIndex(() => {
        return items.length - 1
      })
    } else {
      setCarouselIndex((prev) => {
        return prev - 1;
      });
    }
    await handleTransition();
  };

  return (
    <div className={styles.carouselContainerFlex}>
      <div className={`${styles.carouselItem} ${styles.descriptionDiv}`}>
        <div className={styles.rightArrow}>
          <button className={styles.button} onClick={handleNextImage}>
            <svg fill="#000000" viewBox="0 0 16 16" height="50px" width="50px" aria-label="right arrow">
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"
              />
            </svg>
          </button>
        </div>
        <img
          className={isTransitioning ? styles.fadeOut : styles.fadeIn}
          src={items[carouselIndex].url}
          alt={items[carouselIndex].alt}
        />
        <div className={styles.leftArrow}>
          <button className={styles.button} onClick={handlePreviousImage} aria-label="left arrow">
            <svg fill="#000000" viewBox="0 0 16 16" height="50px" width="50px">
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 00-.5-.5H2.707l3.147-3.146a.5.5 0 10-.708-.708l-4 4a.5.5 0 000 .708l4 4a.5.5 0 00.708-.708L2.707 8.5H14.5A.5.5 0 0015 8z"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${styles.carouselDescription} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
        >
          <p>{items[carouselIndex].description}</p>
        </div>
      </div>
    </div>
  );
}
