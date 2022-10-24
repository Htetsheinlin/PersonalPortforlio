import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from "next/link"

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hello there! I am Htet Shein Lin, a web developer, a self-motivated frontend developer.
      </SectionText>
      <Link href="#footer">
        <Button>
          Hire me!
        </Button>
      </Link>
      
    </LeftSection>
  </Section>
);

export default Hero;