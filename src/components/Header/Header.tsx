'use client';
import { Download, Mail, Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      className={`${styles.navigation} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>Muhammad Hassan Rana</div>

        {/* Desktop Nav */}
        <div className={styles.navLinks}>
          {navItems.map((item) => (
            <button key={item.href} onClick={() => scrollToSection(item.href)}>
              {item.label}
            </button>
          ))}
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <div className={styles.info}>
            <Mail size={16} /> <span>iamhassanrana265@gmail.com</span>
          </div>
          <button className={styles.cvBtn}>
            <Download size={16} /> Download CV
          </button>
        </div>

        {/* Mobile menu button */}
        <button className={styles.menuBtn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          {navItems.map((item) => (
            <button key={item.href} onClick={() => scrollToSection(item.href)}>
              {item.label}
            </button>
          ))}
          <div className={styles.mobileContact}>
            <div className={styles.info}>
              <Mail size={16} /> <span>iamhassanrana265@gmail.com</span>
            </div>
            <button className={styles.cvBtn}>
              <Download size={16} /> Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
