import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-card relative border-t   border-border mt-10 pt-8  flex flex-wrap justify-center items-center">
      <p className="text-sm text-muted-foreground">
        &copy;{new Date().getFullYear()}Developer By Ola All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
