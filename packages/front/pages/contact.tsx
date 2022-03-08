import React from 'react';
import Link from 'next/link';

const Contact = () => (
  <div>
    <h2>Contact me!</h2>
    <div>
      <p>Let's talk about what can I offer to you:</p>
      <Link href="/appointments">Click here</Link>
    </div>
  </div>
);

export default Contact;
