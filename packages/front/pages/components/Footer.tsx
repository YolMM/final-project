import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <div>
    <div>
      <Link href="/">Find the studio</Link>
      <Link href="/aboutme">About me</Link>
      <Link href="/contact">Contact</Link>
    </div>
    <div>
      <p>Build for CORE Code School</p>
    </div>
  </div>
);

export default Footer;
