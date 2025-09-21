'use client';
import React from 'react';
import styles from './style.module.scss';
import { Award, Badge, Download, TrendingUp, Users } from 'lucide-react';

const AboutSection = () => {
  const cards = [
    {
      icon: <Award />,
      title: '50+ Projects Delivered',
      subtitle:
        'Successfully delivered trading platforms and extensions for startups',
    },
    {
      icon: <Users />,
      title: '25+ Happy Clients',
      subtitle:
        'Building long-term relationships with satisfied clients worldwide',
    },
    {
      icon: <TrendingUp />,
      title: '3 Years Experience',
      subtitle:
        'Specialized expertise in fintech and browser extension development',
    },
  ];
  return (
    <section id="about" className={styles.container}>
      <div className={styles.heading}>About Me</div>
      <div className={styles.subHeading}>
        Full-stack developer with a passion for creating innovative trading
        applications,
        <br /> AI-powered solutions, and productivity-enhancing Chrome
        extensions for
        <br /> modern businesses.
      </div>
      <div className={styles.content}>
        {/* two columns */}
        <div className={styles.left}>
          <div className={styles.leftHeading}>
            Building the Future of Web Applications
          </div>
          <div className={styles.leftPara}>
            With over 3 years of experience in full-stack development, I
            specialize in creating cutting-edge trading platforms, AI
            applications, and Chrome extensions that drive business growth. My
            expertise spans from MVP development for startups to scaling
            enterprise-level applications.
          </div>
          <div className={styles.leftPara2}>
            I &apos;m passionate about using modern technologies like React,
            Next.js, Node.js, and advanced browser APIs to solve complex
            problems. Whether it&apos;s real-time trading systems, machine
            learning integration, or browser automation tools, I deliver
            solutions that exceed expectations.
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.primary}>
              <Download />
              <a
                href="/Muhammad Hassan Rana.pdf"
                download="Muhammad Hassan Rana.pdf"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Download CV
              </a>
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
              Lets Work Together
            </button>
          </div>
        </div>
        <div className={styles.right}>
          {cards.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.Icon}>{item.icon}</div>
              <div className={styles.cardbox}>
                <div className={styles.cardtitle}>{item.title}</div>
                <div className={styles.cardsubtitle}>{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
