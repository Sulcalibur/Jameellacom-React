import React from 'react'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import HomeLinkButton from '../components/home-link-button'
import './gengame.css'

const Gengame = (props) => {
  return (
    <div className="gengame-container1">
      <Helmet>
        <title>Gengame - Jameella</title>
        <meta
          name="description"
          content="UX Researcher - Experienced User Experience Researcher with expertise in usability testing, user behaviour analysis, and conversion rate optimization."
        />
        <meta property="og:title" content="Gengame - Jameella" />
        <meta
          property="og:description"
          content="UX Researcher - Experienced User Experience Researcher with expertise in usability testing, user behaviour analysis, and conversion rate optimization."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/13741081-65b9-41a7-a581-2e710693e7f4/41939652-3456-4112-84ed-3ac4217dc261?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <header data-role="Header" className="gengame-header">
        <div className="gengame-container2">
          <div className="gengame-nav">
            <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
          </div>
        </div>
        <div className="gengame-btn-group">
          <a
            href="mailto:jameella@me.com?subject=Enquiry: "
            className="gengame-link1 button"
          >
            Get in touch
          </a>
        </div>
      </header>
      <div className="gengame-hero">
        <div className="gengame-container3">
          <h1 className="gengame-text10">Gengame / Chameleon </h1>
          <span className="gengame-text11">
            During the COVID-19 pandemic, I worked on two web applications for
            the NHS, supporting volunteers.
          </span>
        </div>
        <img
          alt="image"
          src="/portfolio-images/nhs/front-page-1500w.png"
          className="gengame-image1"
        />
        <img
          alt="image"
          src="/portfolio-images/nhs/desktop%20-%201-1500h.png"
          className="gengame-image2"
        />
        <span className="gengame-text12">
          The UX research conducted for these applications involved:
        </span>
        <ul className="gengame-ul list">
          <li className="gengame-li1 list-item">
            <span>
              Discovery: Collaborating with stakeholders, I gained an
              understanding of the applications&apos; objectives, target users,
              and key features through extensive desk research.
            </span>
          </li>
          <li className="gengame-li2 list-item">
            <span>
              <span>
                User Persona Development: Interviews and surveys with potential
                volunteers helped create user personas that guided design
                decisions and user journeys.
              </span>
              <br></br>
            </span>
          </li>
          <li className="gengame-li3 list-item">
            <span>
              <span>
                Usability Testing: Tests on wireframes and low-fidelity
                prototypes identified issues and gathered feedback for iterative
                improvements, using remote testing methods to meet project
                timelines.
              </span>
              <br></br>
            </span>
          </li>
          <li className="gengame-li4 list-item">
            <span>
              <span>
                Iterative Design: Collaborating with the design team, I refined
                user interfaces to ensure consistency with NHS brand guidelines,
                creating intuitive and accessible designs.
              </span>
              <br></br>
            </span>
          </li>
          <li className="gengame-li5 list-item">
            <span>
              <span>
                Accessibility Compliance: Thorough accessibility audits ensured
                compliance with WCAG 2.1 standards, addressing color contrast,
                keyboard navigation, screen reader compatibility, and other
                considerations for inclusivity.
              </span>
              <br></br>
            </span>
          </li>
        </ul>
        <div className="gengame-container4">
          <img
            alt="image"
            src="/portfolio-images/nhs/nhs_phone_03%402x-400w.png"
            className="gengame-image3"
          />
          <img
            alt="image"
            src="/portfolio-images/nhs/iphone%2011%20pro%20max%20-%201-400w.png"
            className="gengame-image4"
          />
        </div>
        <div className="gengame-banner">
          <h2 className="gengame-text26">
            The results achieved included streamlined user flows, positive user
            feedback, and increased volunteer engagement, contributing to more
            efficient NHS support during the pandemic.
          </h2>
          <a
            href="mailto:jameella@me.com?subject=Enquiry:"
            className="gengame-link2 button"
          >
            Get in touch
          </a>
          <HomeLinkButton rootClassName="home-link-buttonroot-class-name3"></HomeLinkButton>
        </div>
      </div>
      <footer className="gengame-footer">
        <span className="gengame-text27">
          © 2023 Jameella, All Rights Reserved.
        </span>
        <div className="gengame-icon-group">
          <a
            href="https://links.jameella.com/linkedin"
            target="_blank"
            rel="noreferrer noopener"
            className="gengame-link3"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="gengame-icon1">
              <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Gengame
