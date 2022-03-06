import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <ul>
    <li>
      <Link href="/">Find the studio</Link>
    </li>
    <li>
      <Link href="/aboutme">About me</Link>
    </li>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </ul>
);

export default Footer;
