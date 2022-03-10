/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  PagesSty, CenteredPh, GallerySty, H2, JDInfo, JDPic,
} from './components/style/Style';

const About = () => (
  <PagesSty>
    <H2>About me 📷</H2>
    <JDInfo>
      <JDPic src="/johndoe/JD4.jpg" alt="John" />
      <div>
        <p>People say I'm the best boss. They go, 'God, we've never worked in a place like this.
          If I advance any higher in this company then this would be my career.
          And uh, well, if this were my career, I'd have to throw myself in front of a train.
        </p>
        <p>
          That's ace nigh a cracking the old bill up at the crack of dawn golly gosh trouble and
          strife, Doctor Who Weeping Angels therewith manky chinwag. Nose rag chinwag rubbish skive
          copper Queen Elizabeth throw a spanner in the works blighty chav down the village green
          goggledegook rather 10 pence mix, apple and pears crumpets I bid you good day bogroll
          middle class scatterbrained fancied a flutter had a barney with the inlaws Victoria sponge
          cake The Doctor pants. Fork out therewith clock round the earhole mince pies, the lakes
          throw a paddy Northeners smeg head, spend a penny picalilly.
        </p>
        <p>
          In the goolies pot noodle well fit by 'eck love oopsy-daisies, spend a penny meat and two
          veg ear hole. numbskull macca therewith. Curtain twitching taking the mick goggledegook
          got his end away we'll be 'avin less of that blighty on the pull big light, crumpets on
          the pull nonsense odds and sods bowler hat. Bob's your uncle bow ties are cool a fiver
          Doctor Who off t'shop skive, the dog's dinner 10 pence mix Northeners houlligan nonsense,
          pot noodle one off by 'eck love cup of tea.
        </p>
      </div>
    </JDInfo>
    <GallerySty>
      <CenteredPh>
        <JDPic src="/johndoe/JD5.jpg" alt="John" />
      </CenteredPh>
      <CenteredPh>
        <JDPic src="/johndoe/JD6.jpg" alt="John" />
      </CenteredPh>
      <CenteredPh>
        <JDPic src="/johndoe/studio1.jpg" alt="John" />
      </CenteredPh>
      <CenteredPh>
        <JDPic src="/johndoe/JD1.jpg" alt="John" />
      </CenteredPh>
      <CenteredPh>
        <JDPic src="/johndoe/photowork4.jpg" alt="John" />
      </CenteredPh>
      <CenteredPh>
        <JDPic src="/johndoe/photowork1.jpg" alt="John" />
      </CenteredPh>
    </GallerySty>
  </PagesSty>
);

export default About;
