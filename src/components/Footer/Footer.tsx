import React from 'react';
import { FooterProp } from '@/types/footer';
import styles from './Footer.module.css';

export default function Footer({ footer }: FooterProp) {
  return (
    <footer className={styles.footer}>
      <img src={footer.background} />
      <p>{footer.text}</p>
    </footer>
  );
}
