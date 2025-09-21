import React from 'react';
import styles from './style.module.scss';
import yotofrontPic from '../../../public/images/yoto/yotofront.png';
import traderatefrontPic from '../../../public/images/Traderate/Traderatefront.png';
import TimberfrontPic from '../../../public/images/TimberCraft/TimberCraftfront.png';
import CarvillafrontPic from '../../../public/images/Carvilla/CarvillafrontPic.png';
import EndurafrontPic from '../../../public/images/Endura/Endura.png';
import yotoExtFront from '../../../public/images/yotoExt/yotoExtFront.jpeg';
const FeaturedProjects = () => {
  const cardData = [
    {
      image: yotofrontPic,
      title: 'Yoto Application',
      summary:
        'Yoto.ai intelligently searches across data-driven profiles to surface individuals who align with your skills, values, and culture.',
      technologies: [
        'Next.js',
        'Typescript',
        'Node.js',
        'Express.js',
        'PostgresSql',
        'Open AI',
      ],
    },
    {
      image: traderatefrontPic,
      title: 'Trading Application',
      summary:
        'Step into the future of finance with Traderate, a smart trading platform built for precision and performance.',
      technologies: [
        'React.js',
        'Typescript',
        'Node.js',
        'Express.js',
        'Mongodb',
        'Binance Websocket',
      ],
    },
    {
      image: TimberfrontPic,
      title: 'TimberCraft Application',
      summary:
        'Streamline your business with Timber Craft, an all-in-one platform for portfolio and client management.',
      technologies: [
        'Next.js',
        'Typescript',
        'Node.js',
        'Express.js',
        'Postgres sql',
        'Google Calendar',
        'Google Meets',
      ],
    },
    {
      image: CarvillafrontPic,
      title: 'Carvilla Application',
      summary:
        'Carvilla is your all-in-one car management solution. From tracking vehicle portfolios to managing clients.',
      technologies: [
        'React',
        'Typescript',
        'Manifest V3',
        'chrome api',
        'content script',
        'background scrip',
      ],
    },
    {
      image: EndurafrontPic,
      title: 'Endura Application',
      summary:
        'EnduraGrowth Solutions empowers startups and SMBs with intelligent, data-driven marketing solutions.',
      technologies: [
        'Next.js',
        'Typescript',
        'Node.js',
        'Express.js',
        'Postgres sql',
        'Open Api',
        'Google Trends',
      ],
    },
    {
      image: yotoExtFront,
      title: 'Yoto Chrome Extension',
      summary:
        'Yoto Chrome Extension helps users extract and manage candidate contact information directly from web platforms, streamlining recruitment and outreach processes.',
      technologies: [
        'Next.js',
        'Typescript',
        'Node.js',
        'Express.js',
        'Postgres sql',
        'Open Api',
        'Google Trends',
      ],
    },
  ];

  return (
    <section id="projects" className={styles.container}>
      <div className={styles.heading}>Featured Projects</div>
      <div className={styles.subHeading}>
        Showcasing innovative solutions built for startups and enterprises,
        <br /> from trading platforms to AI applications and Chrome extensions.
      </div>

      <div className={styles.cardsGrid}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardImage}>
              <img src={card.image.src} alt={card.title} />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardSummary}>{card.summary}</p>
              <div className={styles.techList}>
                {card.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
                {card.technologies.length > 3 && (
                  <span className={styles.moreTag}>
                    +{card.technologies.length - 3} more
                  </span>
                )}
              </div>
              <button className={styles.viewBtn}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
