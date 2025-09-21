'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import yotofrontPic from '../../../public/images/yoto/yotofront.png';
import traderatefrontPic from '../../../public/images/Traderate/Traderatefront.png';
import TimberfrontPic from '../../../public/images/TimberCraft/TimberCraftfront.png';
import CarvillafrontPic from '../../../public/images/Carvilla/CarvillafrontPic.png';
import EndurafrontPic from '../../../public/images/Endura/Endura.png';
import yotoExtFront from '../../../public/images/yotoExt/yotoExtFront.jpeg';
import yoto1 from '../../../public/images/yoto/yoto1.png';
import yoto2 from '../../../public/images/yoto/yoto2.png';
import yoto3 from '../../../public/images/yoto/yoto3.png';
import yoto4 from '../../../public/images/yoto/yoto4.png';
import Traderate1 from '../../../public/images/Traderate/Traderate1.png';
import Traderate2 from '../../../public/images/Traderate/Traderate2.png';
import Traderate3 from '../../../public/images/Traderate/Traderate3.png';
import Traderate4 from '../../../public/images/Traderate/Traderate4.png';
import Traderate5 from '../../../public/images/Traderate/Traderate5.png';
import Traderate6 from '../../../public/images/Traderate/Traderate6.png';
import TimberCraft1 from '../../../public/images/TimberCraft/TimberCraft1.png';
import TimberCraft2 from '../../../public/images/TimberCraft/TimberCraft2.png';
import TimberCraft3 from '../../../public/images/TimberCraft/TimberCraft3.png';
import TimberCraft4 from '../../../public/images/TimberCraft/TimberCraft4.png';
import TimberCraft5 from '../../../public/images/TimberCraft/TimberCraft5.png';
import Carvilla1 from '../../../public/images/Carvilla/Carvilla1.png';
import Carvilla2 from '../../../public/images/Carvilla/Carvilla2.png';
import Carvilla3 from '../../../public/images/Carvilla/Carvilla3.png';
import Carvilla4 from '../../../public/images/Carvilla/Carvilla4.png';
import Carvilla5 from '../../../public/images/Carvilla/Carvilla5.png';
import Carvilla6 from '../../../public/images/Carvilla/Carvilla6.png';
import Endura1 from '../../../public/images/Endura/Endura1.png';
import Endura2 from '../../../public/images/Endura/Endura2.png';
import Endura3 from '../../../public/images/Endura/Endura3.png';
import Endura4 from '../../../public/images/Endura/Endura4.png';
import Endura5 from '../../../public/images/Endura/Endura5.png';
import Endura6 from '../../../public/images/Endura/Endura6.png';
import Endura7 from '../../../public/images/Endura/Endura7.png';
import Endura8 from '../../../public/images/Endura/Endura8.png';
import yotoExt1 from '../../../public/images/yotoExt/image.png';
import { StaticImageData } from 'next/image';
interface Project {
  image: StaticImageData;
  title: string;
  summary: string;
  technologies: string[];
  overview: string;
  features: string[];
  images?: StaticImageData[]; // optional additional images
}

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mainImage, setMainImage] = useState<string>('');

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
      overview:
        'Yoto.ai is a smart recruitment platform that makes the hiring process fast and efficient. Through this, recruiters and HR teams can easily find the right candidates, instantly access their contact details, and organize profiles in one place. With the bulk export option, it’s also possible to download multiple profiles at once.',
      features: [
        'Smart Candidate Search – Use advanced prompts and filters to find the best candidates within seconds.',
        'Instant Contact Details – Get verified contact information instantly with profiles.',
        'Easy Profile Organization – Manage candidates with lists, tags, and categories.',
        'Bulk Export Option – Export multiple profiles in one click and add them to your hiring workflow.',
      ],
      images: [yotofrontPic, yoto1, yoto2, yoto3, yoto4],
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
      overview:
        'Traderate is a smart trading platform designed for both new and experienced traders. It offers real-time trading signals, copy-trading capabilities, and social features like leaderboards to help you track and follow top performers. With profile management, a reward system, and a referral program, Traderate makes it easier to trade confidently, stay informed, and benefit from the community.',
      features: [
        'Signals Creation — Generate or receive real-time trading signals based on market analysis to help you make timely and informed trading decisions.',
        'Copy Trading — Automatically replicate the trades of successful traders; follow and copy their strategies to potentially enhance your own results.',
        'Leaderboard — Browse rankings of top traders to see performance metrics, track who’s doing well, and choose who to follow or copy.',
        'Rewards System — Earn rewards or incentives based on performance, engagement, or meeting certain milestones on the platform.',
        'Referral System — Invite friends or colleagues, and benefit from bonuses or commissions when your referrals join or make trades.',
      ],
      images: [
        traderatefrontPic,
        Traderate1,
        Traderate2,
        Traderate3,
        Traderate4,
        Traderate5,
        Traderate6,
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
      overview:
        'TimberCraft is an all-in-one business management platform that helps professionals and agencies organize their work seamlessly. From managing client relationships to maintaining a well-structured portfolio, TimberCraft ensures everything stays in one place. With built-in scheduling and smart reminders, it makes collaboration, planning, and client communication easier than ever.',
      features: [
        'Portfolio Management — Showcase, organize, and update your projects in a structured and visually appealing way.',
        'Client Management — Keep all client information, interactions, and history in one centralized dashboard.',
        'Schedule Meetings — Plan and manage client meetings with integrated scheduling tools.',
        'Smart Reminders — Stay on top of deadlines and appointments with automated notifications and reminders.',
      ],
      images: [
        TimberfrontPic,
        TimberCraft1,
        TimberCraft2,
        TimberCraft3,
        TimberCraft4,
        TimberCraft5,
      ],
    },
    {
      image: CarvillafrontPic,
      title: 'Carvilla Application',
      summary:
        'Carvilla is your all-in-one car management solution. From tracking vehicle portfolios to managing clients.',
      technologies: [
        'React',
        'Node.js',
        'Express.js',
        'Postgres sql',
        'Typescript',
        'Scss',
      ],
      overview:
        'Carvilla is a complete car management and dealership solution designed for businesses and individuals in the automotive space. Whether it’s buying, selling, or renting vehicles, Carvilla helps streamline every process with ease. Alongside managing customer records, it offers tools for tracking inventory, handling transactions, and ensuring smooth client interactions — all in one modern platform.',
      features: [
        'Customer Records — Maintain detailed customer profiles with history, preferences, and transactions.',
        'Buying & Selling — Simplify the vehicle buying and selling process with a smooth, well-organized workflow.',
        'Vehicle Renting — Manage short-term and long-term rental operations with ease.',
        'Inventory Management — Track available cars, update listings, and monitor stock in real time.',
        'Transaction Management — Keep records of payments, invoices, and deal history securely.',
        'Analytics & Reports — Get insights into sales performance, rental trends, and customer activity.',
      ],
      images: [
        CarvillafrontPic,
        Carvilla1,
        Carvilla2,
        Carvilla3,
        Carvilla4,
        Carvilla5,
        Carvilla6,
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
      overview:
        'Endura is an intelligent marketing solution designed to empower startups and growing businesses with data-driven insights. It combines market research, content planning, persona generation, and keyword analysis into a single streamlined platform. By turning complex data into clear strategies, Endura helps brands understand their audience, optimize campaigns, and achieve sustainable growth.',
      features: [
        'Market Research — Access actionable insights about industry trends, competitors, and target audiences.',
        'Content Planner — Organize, schedule, and align content strategies with business goals.',
        'Persona Generator — Build detailed customer personas to better understand user behavior, pain points, and motivations.',
        'Keyword Analyzer — Discover high-impact keywords to boost SEO and maximize campaign reach.',
        'Performance Tracking — Monitor campaign effectiveness with analytics and reporting tools.',
        'Collaboration Tools — Work seamlessly with your team by sharing insights, plans, and strategies in one place.',
      ],

      images: [
        EndurafrontPic,
        Endura1,
        Endura2,
        Endura3,
        Endura4,
        Endura5,
        Endura6,
        Endura7,
        Endura8,
      ],
    },
    {
      image: yotoExtFront,
      title: 'Yoto Chrome Extension',
      summary:
        'Yoto Chrome Extension helps users extract and manage candidate contact information directly from web platforms, streamlining recruitment and outreach processes.',
      technologies: [
        'React',
        'Scss',
        'Manifest V3',
        'Content Script',
        'Background script',
        'chrome api',
      ],
      overview:
        'The Yoto Chrome Extension is a powerful recruitment tool that enables users to extract, organize, and manage candidate information directly from web platforms. Designed to save time and streamline workflows, it integrates seamlessly into your browser, allowing recruiters to capture verified contact details, manage profiles, and accelerate outreach without leaving their browsing session.',
      features: [
        'One-Click Data Extraction — Instantly capture candidate profiles and contact details from supported platforms.',
        'Profile Management — Save, tag, and categorize candidate data for easy access and organization.',
        'Seamless Integration — Works directly in the browser without the need for switching between apps.',
        'Bulk Export — Download multiple candidate profiles at once and integrate them into your hiring pipeline.',
        'Search & Filter — Quickly find saved candidates using advanced filters and tags.',
        'Secure Data Handling — Ensures all captured information is stored and managed securely.',
      ],
      images: [yotoExtFront, yotofrontPic, yotoExt1],
    },
  ];

  const openModal = (project: Project) => {
    if (!project.images) return;
    setSelectedProject(project);
    setMainImage(project.images[0].src);
  };

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className={styles.container}>
      <div className={styles.heading}>Featured Projects</div>
      <div className={styles.subHeading}>
        Showcasing innovative solutions built for startups and enterprises,
        <br /> from trading platforms to AI applications and Chrome extensions.
      </div>

      <div className={styles.cardsGrid}>
        {cardData.map((card, idx) => (
          <div key={idx} className={styles.card}>
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
              <button
                className={styles.viewBtn}
                onClick={() => openModal(card)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>
              ×
            </button>
            <div className={styles.modalContent}>
              {/* Left - Details */}
              <div className={styles.modalLeft}>
                <h2>{selectedProject.title}</h2>
                {selectedProject.overview && (
                  <>
                    <h3 className={styles.subSectionTitle}>Overview</h3>
                    <p>{selectedProject.overview}</p>
                  </>
                )}

                <ul>
                  {selectedProject.technologies.map(
                    (tech: string, i: number) => (
                      <li key={i}>{tech}</li>
                    )
                  )}
                </ul>
                {/* Features Section */}
                {selectedProject.features && (
                  <>
                    <h3 className={styles.subSectionTitle}>Key Features</h3>
                    <ul className={styles.featureList}>
                      {selectedProject.features.map(
                        (feature: string, i: number) => (
                          <li key={i}>{feature}</li>
                        )
                      )}
                    </ul>
                  </>
                )}
              </div>
              {/* Right - Images */}
              <div className={styles.modalRight}>
                <img className={styles.mainImage} src={mainImage} alt="main" />
                <div className={styles.thumbnailContainer}>
                  {selectedProject.images &&
                    selectedProject.images.map(
                      (img: StaticImageData, i: number) => (
                        <img
                          key={i}
                          src={img.src}
                          alt={`thumb-${i}`}
                          className={`${styles.thumbnail} ${mainImage === img.src ? styles.activeThumbnail : ''}`}
                          onClick={() => setMainImage(img.src)}
                        />
                      )
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
