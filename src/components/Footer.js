import React from "react";
import "../styles/footerStyle.css";

const Logo = (
  <svg
    // width="39"
    height="43"
    viewBox="0 0 59 53"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29.6668 52.9999C15.4754 52.9999 3.92871 42.426 3.92871 29.428C3.92871 26.5521 6.23119 24.2148 9.06435 24.2148C11.8975 24.2148 14.2 26.5521 14.2 29.428C14.2 36.6742 21.1417 42.5737 29.6668 42.5737C38.192 42.5737 45.1423 36.6742 45.1423 29.428C45.1423 26.5521 47.4447 24.2148 50.2779 24.2148C53.1111 24.2148 55.4135 26.5521 55.4135 29.428C55.4135 42.426 43.8669 52.9999 29.6668 52.9999Z"
      fill="black"
    />
    <path
      d="M50.4663 0C45.7587 0 41.9412 3.87508 41.9412 8.66246C41.9412 13.4411 45.7587 17.3162 50.4663 17.3162C55.1826 17.3162 59.0001 13.4411 59.0001 8.66246C59.0001 3.87508 55.1826 0 50.4663 0ZM50.4663 12.7982C48.2152 12.7982 46.3921 10.9475 46.3921 8.66246C46.3921 6.36869 48.2152 4.51803 50.4663 4.51803C52.726 4.51803 54.5492 6.36869 54.5492 8.66246C54.5492 10.9475 52.726 12.7982 50.4663 12.7982Z"
      fill="black"
    />
    <path
      d="M8.53373 17.3249C13.2468 17.3249 17.0675 13.4466 17.0675 8.66246C17.0675 3.87832 13.2468 0 8.53373 0C3.82068 0 0 3.87832 0 8.66246C0 13.4466 3.82068 17.3249 8.53373 17.3249Z"
      fill="black"
    />
  </svg>
);
function Footer() {
  return (
    <div className="footerContariner">
      <div className="footerLogoContainer">
        <div className="footerLogo">{Logo}</div>
      </div>
      <div className="footerMiddleContainer">
        <div className="footerMiddleDiv">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="footerPStyle"
          >
            Terms of service
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="footerPStyle"
          >
            Privacy Policy
          </a>
        </div>
        <div className="footerRightDiv">
          <p className="footerPStyle2">
            &copy; {new Date().getFullYear()} Drugs Networks, Inc
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
