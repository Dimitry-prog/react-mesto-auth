import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer page__footer">
      <p className="footer__copyright">&copy; {year} Dimitry</p>
    </footer>
  );
};

export default Footer;