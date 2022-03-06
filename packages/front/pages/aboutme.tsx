/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';

const About = () => (
  <div>
    <h2>About me</h2>
    <div>
      <Image src="/johndoe/JD4.jpg" alt="John" width="320" height="220" />
    </div>
    <div>
      <p>People say I'm the best boss. They go, 'God, we've never worked in a place like this.
        If I advance any higher in this company then this would be my career.
        And uh, well, if this were my career, I'd have to throw myself in front of a train.
        You do me a favor? Wham! Favor returned. Do not test my politeness.
      </p>
    </div>
  </div>
);

export default About;
