import React from 'react';
import Link from 'next/link';
import { Sessionbtn } from './Sessionbtn';

const Menu = () => (
  <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/aboutme">About me</Link>
    </li>
    <li>
      <Link href="/prices">Prices</Link>
    </li>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
    <li>
      <Sessionbtn />
    </li>
  </ul>
);

export default Menu;
