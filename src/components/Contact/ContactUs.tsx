'use client';
import React, { useState } from 'react';
import styles from './style.module.scss';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';

const ContactUs = () => {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const contactItems = [
    { icon: <Mail />, label: 'Email', value: 'iamhassanrana265@gmail.com' },
    { icon: <Phone />, label: 'Phone', value: '+923051032265' },
    { icon: <MapPin />, label: 'Location', value: 'Islamabad, Pakistan' },
    { icon: <Clock />, label: 'Response Time', value: 'Within 24 hours' },
  ];

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const form = e.currentTarget;
    const formData = {
      name: form.user_name.value,
      email: form.user_email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        const data = await res.json();
        setStatus(data.message || 'Failed to send message.');
      }

      // Automatically hide status after 5 seconds
      setTimeout(() => {
        setStatus('');
      }, 5000);
    } catch (err) {
      setStatus('An error occurred.');
      console.error(err);

      // Automatically hide status after 5 seconds
      setTimeout(() => {
        setStatus('');
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

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
        <form className={styles.contactForm} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? <div className={styles.spinner}></div> : 'Send Message'}
          </button>

          {status && <p className={styles.status}>{status}</p>}
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
