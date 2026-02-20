'use client';

import { useState } from 'react';
import Image from 'next/image';
import profile from "../../public/profile.jpg"
import { IoChevronDownOutline, IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline, IoLocationOutline, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io5';

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside className={`sidebar ${isExpanded ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar">
          <Image
            src={profile}
            alt="avatar"
            width={80}
            height={80}
            style={{ borderRadius: "50%", scale: "1.5" }}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Pheeraphat Dherachaisuphakij">
            Pheeraphat <br />Dherachaisuphakij
          </h1>
        </div>

        <button className="info-more-btn" onClick={toggleSidebar} data-sidebar-btn>
          <span>Show Contacts</span>
          <IoChevronDownOutline />
        </button>
      </div>

      <div className="sidebar-info-more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:dpheeraphat2547@gmail.com" className="contact-link">dpheeraphat2547@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoCalendarOutline />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2004-04-28">April 28, 2004</time>
            </div>
          </li>
        </ul>

        <div className="separator"></div>
      </div>
    </aside>
  );
} 