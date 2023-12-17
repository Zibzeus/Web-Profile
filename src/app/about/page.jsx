import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
            <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.desc}>
            Selamat datang di Lumine Software House,tempat kreativitas dan inovasi bersatu untuk memberikan solusi terbaik dalam dunia ilustrasi, web, dan aplikasi. 
            Sebagai perusahaan yang berdedikasi tinggi, kami memiliki misi untuk menghadirkan pengalaman digital yang luar biasa dan memukau.
              <br />
              <br />
              Visi kami adalah menjadi pemimpin dalam industri kreatif, mengubah ide-ide menjadi karya seni digital yang luar biasa. 
              Kami percaya bahwa setiap proyek memiliki cerita uniknya sendiri, dan kami berkomitmen untuk membantu klien kami mewujudkannya melalui ilustrasi, pengembangan web, dan pembuatan aplikasi yang inovatif.
            </p>
        </div>
        <div className={styles.item}>
            <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.desc}>
            Di Lumine Software House, keahlian kami merangkum tiga bidang utama: ilustrasi, pengembangan web, dan pembuatan aplikasi. Dalam ilustrasi, seniman-seniman kreatif kami menghasilkan karya yang memukau dan memadukan keunikan dengan detail yang menakjubkan. Di pengembangan web, kami menonjol dengan desain responsif dan fungsionalitas yang memberikan pengalaman pengguna yang luar biasa. Dalam pembuatan aplikasi, keahlian teknis kami menyelaraskan kebutuhan fungsional dengan inovasi untuk menciptakan solusi yang relevan dan berkualitas tinggi.
              <br />
              <br /> - Kreativitas
              <br />
              <br /> - Kualitas
              <br />
              <br /> - Kolaborasi
              <br />
              <br /> - Inovasi
            </p>
            <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About