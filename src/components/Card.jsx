import styled from 'styled-components';

import { IllustrationMobile, BackgroundMobile } from '../assets/index';
import { Accordion } from './Accordion';

// Only purpose is to position the Illustration
const CardShadow = styled.div`
  position: relative;
  padding-top: 6.75rem;
  margin-top: 1rem;
`;

const IllustrationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 2rem;

  svg {
    position: absolute;
    top: 0;

    :nth-child(2) {
      padding-top: 6.5rem;
      padding-left: 1.8rem;
    }
  }
`;

const CardContainer = styled.div`
  background: white;
  width: 270px;
  overflow: hidden;
  border-radius: calc(16px * 1.5);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  padding: 8rem 1rem 1rem 1rem;
  margin-bottom: 1rem;

  h1 {
    text-align: center;
    margin-top: 0;
  }

  @media (min-width: 375px) {
    width: 300px;
  }

  @media (min-width: 576px) {
    width: 400px;
  }

  @media (min-width: 768px) {
    width: 500px;
  }
`;

const Attribution = styled.div`
  font-size: 11px;
  text-align: center;
  padding-top: 8px;
`;

export const Card = ({ messages }) => {
  return (
    <CardShadow>
      <IllustrationWrapper>
        <IllustrationMobile />
        <BackgroundMobile />
      </IllustrationWrapper>
      <CardContainer>
        <h1>FAQ</h1>
        {messages.map((message, ndx) => (
          <Accordion messageId={`message-${ndx}`} key={ndx} faq={message} />
        ))}
        <Attribution>
          Challenge by{' '}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/awexli">Alex Li</a>
        </Attribution>
      </CardContainer>
    </CardShadow>
  );
};
