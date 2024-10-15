import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import HomeLinkButton from '../components/home-link-button'
import './hive-learning.css'

const HiveLearning = (props) => {
  return (
    <div className="hive-learning-container1">
      <Helmet>
        <title>Hive-Learning - Jameella</title>
        <meta
          name="description"
          content="UX Researcher - Experienced User Experience Researcher with expertise in usability testing, user behaviour analysis, and conversion rate optimization."
        />
        <meta property="og:title" content="Hive-Learning - Jameella" />
        <meta
          property="og:description"
          content="UX Researcher - Experienced User Experience Researcher with expertise in usability testing, user behaviour analysis, and conversion rate optimization."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/13741081-65b9-41a7-a581-2e710693e7f4/41939652-3456-4112-84ed-3ac4217dc261?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <header data-role="Header" className="hive-learning-header">
        <div className="hive-learning-container2">
          <div className="hive-learning-nav">
            <NavigationLinks rootClassName="rootClassName12"></NavigationLinks>
          </div>
        </div>
        <div className="hive-learning-btn-group">
          <a
            href="mailto:jameella@me.com?subject=Enquiry: "
            className="hive-learning-link1 button"
          >
            Get in touch
          </a>
        </div>
      </header>
      <div className="hive-learning-hero">
        <div className="hive-learning-container3">
          <h1 className="hive-learning-text10">Hive Learning</h1>
          <span className="hive-learning-text11">
            <br></br>
            <span>
              At Hive Learning, I collaborated with a team to enhance the user
              experience of a peer learning platform.
            </span>
          </span>
        </div>
        <img
          alt="image"
          src="/portfolio-images/hive/1_homepage_main_v2-1500h.png"
          className="hive-learning-image1"
        />
        <span className="hive-learning-text14">
          Through user-centered design principles and iterative processes, I
          focused on various aspects, including:
        </span>
        <ul className="hive-learning-ul list">
          <li className="hive-learning-li1 list-item">
            <span>
              Micro-Interactions: Researched user preferences and expectations
              to enhance engagement with meaningful animations, notifications,
              and transitions.
            </span>
          </li>
          <li className="hive-learning-li2 list-item">
            <span>
              <span>
                Voice and Tone: Developed a style guide through surveys and
                interviews, ensuring communication resonated with the target
                audience.
              </span>
              <br></br>
            </span>
          </li>
          <li className="hive-learning-li3 list-item">
            <span>
              <span>
                User Experience and Ease of Use: Identified pain points through
                usability tests and journey mapping, implementing user-centered
                solutions.
              </span>
              <br></br>
            </span>
          </li>
          <li className="hive-learning-li4 list-item">
            <span>
              <span>
                Comment System: Optimized discussions through interviews,
                observations, and feedback analysis, fostering engagement and
                collaboration.
              </span>
              <br></br>
            </span>
          </li>
          <li className="hive-learning-li5 list-item">
            <span>
              <span>
                Share System: Researched motivations and expectations around
                sharing, implementing intuitive functionalities for
                collaboration and content creation.
              </span>
              <br></br>
            </span>
          </li>
          <li className="hive-learning-li6 list-item">
            <span>
              User Profiles and Admin Dashboards: Optimized interfaces through
              interviews, surveys, and analysis, empowering users and
              administrators.
            </span>
          </li>
        </ul>
        <div className="hive-learning-container4">
          <img
            alt="image"
            src="/portfolio-images/hive/hive%20learning%20general-102-1500w.jpg"
            className="hive-learning-image2"
          />
          <img
            alt="image"
            src="/portfolio-images/hive/hive%20learning%20general-103-1500w.jpg"
            className="hive-learning-image3"
          />
        </div>
        <div className="hive-learning-banner">
          <img
            alt="image"
            src="/portfolio-images/hive/hive%20learning%20(2019-08-26%2021-49-20)-1500h.png"
            className="hive-learning-image4"
          />
          <img
            alt="image"
            src="/portfolio-images/hive/same-colours-1500h.png"
            className="hive-learning-image5"
          />
          <h2 className="hive-learning-text29">
            <span className="hive-learning-text30">
              These efforts resulted in improved user experience, increased
              engagement, collaboration, and a seamless learning experience for
              Hive Learning platform users.
            </span>
            <br></br>
          </h2>
          <a
            href="mailto:jameella@me.com?subject=Enquiry:"
            className="hive-learning-button button"
          >
            Get in touch
          </a>
          <Link to="/" className="hive-learning-navlink">
            <HomeLinkButton
              rootClassName="home-link-buttonroot-class-name1"
              className="hive-learning-component2"
            ></HomeLinkButton>
          </Link>
        </div>
      </div>
      <footer className="hive-learning-footer">
        <span className="hive-learning-text32">
          © 2023 Jameella, All Rights Reserved.
        </span>
        <div className="hive-learning-icon-group">
          <a
            href="https://links.jameella.com/linkedin"
            target="_blank"
            rel="noreferrer noopener"
            className="hive-learning-link2"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="hive-learning-icon1"
            >
              <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default HiveLearning
