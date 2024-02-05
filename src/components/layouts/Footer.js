import React from "react";

function Footer() {
const currentYear = new Date().getFullYear();

  return (
    <div className="bg-dark text-light text-center p-5 mt-5">
      &copy; All Rights Reserved {currentYear} | Made with ❤️
    </div>
  );
}

export default Footer;
