'use client';
import React from 'react';
import styles from './style.module.scss';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className={styles.container}>
      {/* Section 1: About */}
      <div className={styles.section}>
        <h2 className={styles.name}>Muhammad Hassan Rana</h2>
        <p className={styles.summary}>
          Full-stack developer specializing in trading applications, AI
          solutions, and Chrome extensions. Building innovative MVP solutions
          for startups worldwide.
        </p>
        <div className={styles.contactItem}>
          <Mail />
          <span>iamhassanrana265@gmail.com</span>
        </div>
        <div className={styles.contactItem}>
          <Phone />
          <span>+923051032265</span>
        </div>
        <div className={styles.contactItem}>
          <MapPin />
          <span>Islamabad, Pakistan</span>
        </div>
      </div>

      {/* Section 2: Quick Links */}
      <div className={styles.section}>
        <h3 className={styles.title}>Quick Links</h3>
        <nav className={styles.links}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      {/* Section 3: Services */}
      <div className={styles.section}>
        <h3 className={styles.title}>Services</h3>
        <ul className={styles.services}>
          <li>Trading Applications</li>
          <li>Chrome Extensions</li>
          <li>AI Applications</li>
          <li>MVP Development</li>
          <li>Web Development</li>
        </ul>
      </div>

      {/* Section 4: Connect */}
      <div className={styles.section}>
        <h3 className={styles.title}>Let&apos;s Connect</h3>
        <p className={styles.connectText}>
          Ready to start your next project? Let&apos;s discuss how I can help
          bring your ideas to life.
        </p>
        <button
          className={styles.ctaBtn}
          onClick={() => {
            const projectsSection = document.getElementById('contact');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Get in touch
        </button>
        <div className={styles.socials}>
          <a
            href="#"
            aria-label="Github"
            onClick={() =>
              window.open('https://github.com/HassanRana009', '_blank')
            }
          >
            <Github />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/muhammadhassanrana/',
                '_blank'
              )
            }
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
