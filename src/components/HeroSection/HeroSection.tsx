'use client';
import React from 'react';
import styles from './style.module.scss';
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
} from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Full Stack Developer</h1>
        <p className={styles.intro}>I am Muhammad Hassan Rana</p>
        <p className={styles.subHeading}>
          Specializing in Trading Applications, AI based Applications & Chrome
          Extensions
        </p>
        <p className={styles.details}>
          Building cutting-edge MVPs for startups with React, Next.js, Node.js,
          and
          <br /> Chrome Extensions. Transforming ideas into scalable
          applications that drive
          <br /> business growth.
        </p>

        {/* 🔘 Buttons */}
        <div className={styles.buttonContainer}>
          <button
            className={styles.primary}
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View My Work <ArrowDown />
          </button>

          <button
            className={styles.outline}
            onClick={() => {
              const projectsSection = document.getElementById('contact');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Lets Talk <MessageCircle />
          </button>
          <button className={styles.outline}>
            <Download />
            <a
              href="/Muhammad Hassan Rana.pdf"
              download="Muhammad Hassan Rana.pdf"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Download CV
            </a>
          </button>
        </div>

        {/* 🌐 Social Buttons */}
        <div className={styles.socialButtons}>
          <button
            onClick={() =>
              (window.location.href = 'mailto:iamhassanrana265@gmail.com')
            }
          >
            <Mail />
          </button>
          <button
            onClick={() =>
              window.open('https://github.com/HassanRana009', '_blank')
            }
          >
            <Github />
          </button>
          <button
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/muhammadhassanrana/',
                '_blank'
              )
            }
          >
            <Linkedin />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
