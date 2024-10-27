import Link from 'next/link';
import styles from '../styles/404.module.css';

export default function Custom404 () {
    return (
        <>
            <div className={styles.containerDiv}>
                <Link href="/">
                    <img
                        src="/images/Vector.png"
                        alt="ValtechLogo"
                        width={100}
                        height={100}
                    />
                </Link>
                <p>404 | page not found</p>
            </div>
        </>
    );
}