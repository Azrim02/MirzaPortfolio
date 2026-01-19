import Layout from '../components/Layout';
import '../styles/contact.scss';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: 'https://cdn-icons-png.flaticon.com/512/3536/3536505.png',
      url: 'https://www.linkedin.com/in/mirza-shariman-shahril-izal-58b512220/', 
      description: 'Connect with me on LinkedIn'
    },
    {
      name: 'Email',
      icon: 'https://cdn-icons-png.flaticon.com/512/726/726623.png',
      url: 'mailto:mirzashariman02@gmail.com', 
      description: 'Send me an email'
    },
    {
      name: 'GitHub',
      icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
      url: 'https://github.com/Azrim02', 
      description: 'Check out my projects on GitHub'
    }
  ];

  return (
    <Layout contentMaxWidth="800px">
      <div className="contact-container">
        <h1>Get in Touch</h1>
        <p className="contact-intro">
          Feel free to reach out to me through any of these channels. I'd love to hear from you!
        </p>

        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <img src={link.icon} alt={link.name} />
              </div>
              <div className="contact-info">
                <h3>{link.name}</h3>
                <p>{link.description}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="contact-form-section">
          <h2>Or send me a message</h2>
          <form className="contact-form" action="https://formspree.io/f/xlggndbd" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}