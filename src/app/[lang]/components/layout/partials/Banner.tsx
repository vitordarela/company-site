'use client'

import React, { useState } from 'react'
import { hasCookie, setCookie } from "cookies-next";

const Banner = ({ dictionary, ...props }) => {
  const [bannerOpen, setBannerOpen] = useState(true)
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
    setBannerOpen(false)
  };

  const buttonStyle = {
    fontSize: '12px',
    padding: '5px 10px',
    backgroundColor: '#e76d27',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  if (showConsent) {
    return null;
  }

  return (
    <>
      {bannerOpen && (
        <div {...props} className="banner">
          <div className="banner-inner text-xxs">
            <div className="banner-container">

              <div className="fixed inset-0 bg-slate-700 bg-opacity-70">
                <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100">
                  <span style={{cursor:'pointer'}} className="text-dark text-base mr-16 banner-link banner-link-white">
                    { dictionary.description }
                  </span>
                  <button style={buttonStyle} onClick={() => acceptCookie()}>
                    { dictionary.btn_accept }
                  </button>
                </div>
              </div>

            </div>
            <button
              className="banner-close"
              onClick={() => setBannerOpen(false)}
            >
              <span className="screen-reader">Close</span>
              <svg viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Banner
