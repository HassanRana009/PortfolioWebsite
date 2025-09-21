import React from 'react';
import styles from './style.module.scss';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const ContactUs = () => {
  const contactItems = [
    { icon: <Mail />, label: 'Email', value: 'iamhassanrana265@gmail.com' },
    { icon: <Phone />, label: 'Phone', value: '+923051032265' },
    { icon: <MapPin />, label: 'Location', value: 'Islamabad, Pakistan' },
    { icon: <Clock />, label: 'Response Time', value: 'Within 24 hours' },
  ];

  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.heading}>Let&apos;s Work Together</h2>
      <p className={styles.subHeading}>
        Ready to bring your ideas to life? I&apos;m here to help you build
        amazing applications. <br /> Let&apos;s discuss your project and create
        something extraordinary together.
      </p>

      <div className={styles.contactWrapper}>
        {/* Left: Contact Form */}
        <form className={styles.contactForm}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={6} required />
          <button type="submit">Send Message</button>
        </form>

        {/* Right: Contact Info Cards */}
        <div className={styles.contactGrid}>
          {contactItems.map((item, index) => (
            <div key={index} className={styles.contactCard}>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.contactInfo}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
