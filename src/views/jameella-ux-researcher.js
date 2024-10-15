import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import GalleryCard1 from '../components/gallery-card1'
import './jameella-ux-researcher.css'

const JameellaUXResearcher = (props) => {
  return (
    <div className="jameella-ux-researcher-container1">
      <Helmet>
        <title>Jameella UX Researcher</title>
        <meta
          name="description"
          content="UX Researcher - Experienced User Experience Researcher with expertise in usability testing, user behaviour analysis, and conversion rate optimization."
        />
        <meta property="og:title" content="Jameella UX Researcher" />
        <meta
          property="og:description"
          content="UX Researcher - Experienced User Experience Researcher with expertise in usability testing, user behaviour analysis, and conversion rate optimization."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/13741081-65b9-41a7-a581-2e710693e7f4/41939652-3456-4112-84ed-3ac4217dc261?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <div className="jameella-ux-researcher-hero">
        <img
          alt="Jameella"
          src="/jameella-1500w.jpg"
          className="jameella-ux-researcher-image1"
        />
        <div className="jameella-ux-researcher-container2">
          <div className="jameella-ux-researcher-container3">
            <h1 className="jameella-ux-researcher-text10">
              <span>Jameella</span>
              <span className="Heading">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h1>
            <h2 className="jameella-ux-researcher-text13 Content">
              UX Researcher
            </h2>
            <img
              alt="Jameella"
              src="/jameella-1500w.jpg"
              className="jameella-ux-researcher-image2"
            />
            <div className="jameella-ux-researcher-btn-group">
              <a
                href="https://links.jameella.com/cv"
                target="_blank"
                rel="noreferrer noopener"
                className="jameella-ux-researcher-link1 button"
              >
                Download Resume
              </a>
              <a
                href="mailto:jameella@me.com?subject=Enquiry: "
                className="jameella-ux-researcher-link2 button"
              >
                Get in touch
              </a>
            </div>
            <span className="jameella-ux-researcher-text14">
              <span className="jameella-ux-researcher-text15">
                Experienced User Experience Researcher with expertise in
                usability testing, user behaviour analysis, and conversion rate
                optimization.
              </span>
              <span className="jameella-ux-researcher-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br className="jameella-ux-researcher-text17"></br>
              <br className="jameella-ux-researcher-text18"></br>
              <span className="jameella-ux-researcher-text19">
                BA Hons in Psychosocial Studies and certified in User Experience
                Design and Research. Successful projects in usability testing,
                accessibility research, and competitor analysis. Improved
                service reach and advertising strategies through targeted
                campaigns and qualitative research.
              </span>
              <br className="jameella-ux-researcher-text20"></br>
              <span className="jameella-ux-researcher-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="jameella-ux-researcher-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
      </div>
      <h1 className="jameella-ux-researcher-text23">Featured Projects</h1>
      <div className="jameella-ux-researcher-gallery">
        <Link to="/sanderson-design">
          <GalleryCard1
            title="Archive - Sanderson Design"
            subtitle="UX Audit and analysis "
            imageAlt="Sanderson Design"
            imageSrc="/portfolio-images/sanderson/sanderson-design-1500h.png"
            rootClassName="rootClassName"
            className="jameella-ux-researcher-sanderson"
          ></GalleryCard1>
        </Link>
        <Link to="/nhs">
          <GalleryCard1
            title="NHS / Care"
            subtitle="COVID-19 volunteer application research"
            imageAlt="NHS"
            imageSrc="/portfolio-images/nhs/nhs-care%402x-1500h.png"
            rootClassName="rootClassName1"
            className="jameella-ux-researcher-nhs"
          ></GalleryCard1>
        </Link>
        <Link to="/hive-learning">
          <GalleryCard1
            title="Hive Learning"
            subtitle="Peer to peer learning application UX research"
            imageAlt="Hive Learning"
            imageSrc="/portfolio-images/hive/hive-learning-1500h.png"
            rootClassName="rootClassName2"
            className="jameella-ux-researcher-hive"
          ></GalleryCard1>
        </Link>
      </div>
      <footer className="jameella-ux-researcher-footer">
        <span className="jameella-ux-researcher-text24">
          © 2023 Jameella, All Rights Reserved.
        </span>
        <div className="jameella-ux-researcher-icon-group">
          <a
            href="https://links.jameella.com/linkedin"
            target="_blank"
            rel="noreferrer noopener"
            className="jameella-ux-researcher-link3"
          >
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="jameella-ux-researcher-icon1"
            >
              <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default JameellaUXResearcher
