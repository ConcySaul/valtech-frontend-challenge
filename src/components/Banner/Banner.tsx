import React from 'react';
import { HomeBanner } from '@/types';
import styles from './Banner.module.css';

export default function Banner({ banner }: HomeBanner) {
  return (
    <div id="banner_container" className={styles.bannerContainer}>
      <div id="banner_foreground" className={styles.bannerForeground}>
        <img
          src={banner.foregroundAsset.url}
          alt={banner.foregroundAsset.alt}
        />
      </div>
      <div id="banner_background" className={styles.bannerBackground}>
        <img
          src={banner.backgroundAsset.url}
          alt={banner.backgroundAsset.alt}
        />
        <div className={styles.bannerText}>
          <div className={styles.text}>
            <h1>{banner.title}</h1>
            <p>{banner.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
