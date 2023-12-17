import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
      </div>
      <div className={styles.item}>
        {/* Provide width and height properties for the Image component */}
        <Image
          src="/hero.png"
          alt="main image"
          className={styles.img}
          width={600}  // Adjust the width according to your design
          height={400} // Adjust the height according to your design
        />
      </div>
    </div>
  );
}
