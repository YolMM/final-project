import React from 'react';
import Sessionbtn from './Sessionbtn';
import { ALink, MenuSty } from '../style/Style';

const Menu = () => (
  <MenuSty>
    <ALink href="/">Home</ALink>
    <ALink href="/aboutme">About me</ALink>
    <ALink href="/prices">Prices</ALink>
    <ALink href="/contact">Contact</ALink>
    <Sessionbtn />
  </MenuSty>
);

export default Menu;
