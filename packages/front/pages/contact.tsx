import React from 'react';
import {
  ALink, Button, CenteredPh, H2, JDPic, PagesSty,
} from './components/style/Style';

const Contact = () => (
  <PagesSty>
    <H2>Contact me!</H2>
    <CenteredPh>
      <JDPic src="/johndoe/photowork2.jpg" alt="John" />
    </CenteredPh>
    <div>
      <p>Let's talk about what can I offer to you:</p>
      <ALink href="/appointments"><Button type="button">Click here</Button></ALink>
    </div>
  </PagesSty>
);

export default Contact;
