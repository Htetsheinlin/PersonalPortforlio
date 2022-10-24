import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import {FaFigma} from "react-icons/fa"
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with frontend technologies especially with React.js. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <br/>
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experienced with<br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaFigma size="3rem"/>
        <br/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experienced wirh<br/>
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>

);

export default Technologies;
