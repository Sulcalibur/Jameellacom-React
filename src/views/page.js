import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import './page.css'

const Page = (props) => {
  return (
    <div className="page-container1">
      <Helmet>
        <title>Page - Jameella</title>
        <meta
          name="description"
          content="UX Researcher - Experienced User Experience Researcher with expertise in usability testing, user behaviour analysis, and conversion rate optimization."
        />
        <meta property="og:title" content="Page - Jameella" />
        <meta
          property="og:description"
          content="UX Researcher - Experienced User Experience Researcher with expertise in usability testing, user behaviour analysis, and conversion rate optimization."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/13741081-65b9-41a7-a581-2e710693e7f4/41939652-3456-4112-84ed-3ac4217dc261?org_if_sml=1&amp;q=80&amp;force_format=original"
        />
      </Helmet>
      <header data-role="Header" className="page-header">
        <div className="page-container2">
          <div className="page-nav">
            <NavigationLinks rootClassName="rootClassName20"></NavigationLinks>
          </div>
        </div>
        <div className="page-btn-group1">
          <a
            href="mailto:jameella@me.com?subject=Enquiry: "
            className="page-link1 button"
          >
            Get in touch
          </a>
        </div>
      </header>
      <div className="page-hero">
        <div className="page-container3">
          <h1 className="page-text1">Something seems be have gone wrong</h1>
          <div className="page-btn-group2">
            <Link to="/" className="page-navlink button">
              Back on track
            </Link>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1612933510543-5b442296703b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxicm9rZW58ZW58MHx8fHwxNjg1OTE3NzMwfDA&amp;ixlib=rb-4.0.3&amp;h=1500"
          className="page-image"
        />
      </div>
      <footer className="page-footer">
        <span className="page-text2">
          © 2023 Jameella, All Rights Reserved.
        </span>
        <div className="page-icon-group">
          <a
            href="https://links.jameella.com/linkedin"
            target="_blank"
            rel="noreferrer noopener"
            className="page-link2"
          >
            <svg viewBox="0 0 877.7142857142857 1024" className="page-icon1">
              <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Page
