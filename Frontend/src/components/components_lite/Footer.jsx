import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white bg-slate-950 mt-[45px] p-2">
      {/* Footer for the current page */}
      <div className="text-center"    >
        <p>© 2025 Hot Jobs. All rights reserved.</p>
        <p>
          <Link to={"/PrivacyPolicy"}>Privacy Policy </Link> |
          <Link to={"/TermsofService"}> Terms of Service</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
