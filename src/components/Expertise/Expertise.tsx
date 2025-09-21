import React from 'react';
import styles from './style.module.scss';
import { Database, Globe, Server, Wrench, Puzzle } from 'lucide-react';

const Expertise = () => {
  const cardData = [
    {
      icon: <Globe />,
      title: 'Frontend Development',
      skills: [
        'React',
        'Next.js',
        'Typescript',
        'Tailwind',
        'SCSS',
        'Javascript',
      ],
    },
    {
      icon: <Server />,
      title: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'Rest APIs', 'Microservices'],
    },
    {
      icon: <Database />,
      title: 'Database Technologies',
      skills: ['MongoDB', 'PostgresSQL', 'SQLite', 'Firebase'],
    },
    {
      icon: <Puzzle />,
      title: 'Chrome Extensions',
      skills: [
        'Chrome API',
        'Manifest V3',
        'Content Scripts',
        'Background Scripts',
      ],
    },
    {
      icon: <Wrench />,
      title: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'CI/CD', 'Webpack CLI', 'Vite'],
    },
  ];

  return (
    <section className={styles.container}>
      <div className={styles.heading}>Technical Expertise</div>

      <div className={styles.cardGrid}>
        {cardData.map((card, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>{card.icon}</div>
            <div className={styles.title}>{card.title}</div>
            <ul className={styles.skillList}>
              {card.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
