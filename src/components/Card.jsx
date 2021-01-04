import styled from 'styled-components';

import { Accordion } from './Accordion';
import { BoxIllustration } from './BoxIllustration';
import { DesktopIllustration } from './DesktopIllustration';
import { MobileIllustration } from './MobileIllustration';

// Only purpose is to position the Illustration
const CardShadow = styled.div`
  position: relative;
  padding-top: 6.75rem;
  margin-top: 1rem;

  @media (min-width: 1280px) {
    padding: 0;
  }
`;

const CardContainer = styled.div`
  width: 270px;

  background: white;
  overflow: hidden;
  border-radius: calc(16px * 1.5);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  padding: 8rem 1rem 1rem 1rem;
  margin-bottom: 1rem;

  @media (min-width: 375px) {
    width: 300px;
  }

  @media (min-width: 576px) {
    width: 400px;
  }

  @media (min-width: 1280px) {
    position: relative;

    width: 1000px;
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const DesktopPlaceholder = styled.div`
  width: 400px;
`;

const FaqContainer = styled.div`
  position: relative;
  h1 {
    text-align: center;
    margin-top: 0;

    @media (min-width: 1280px) {
      text-align: start;
    }
  }
`;

const AccordionsContainer = styled.div`
  @media (min-width: 1280px) {
    width: 430px;
    height: 320px;
    overflow-y: scroll;
    padding: 8px 2rem 0 0;
    margin-right: 1rem;
  }
`;

const FadeTop = styled.div`
  @media (min-width: 1280px) {
    position: absolute;
    top: 3.1rem;
    height: 1.5rem;
    width: 100%;
    background-image: linear-gradient(white, rgba(255, 255, 255, 0));
  }
`;

const FadeBottom = styled.div`
  @media (min-width: 1280px) {
    position: absolute;
    bottom: 0rem;
    height: 1.5rem;
    width: 100%;
    background-image: linear-gradient(rgba(255, 255, 255, 0), white);
  }
`;

const Attribution = styled.div`
  font-size: 11px;
  text-align: center;
  padding-top: 8px;
  color: white;

  a {
    color: var(--color-text-primary-red);
  }
`;

export const Card = ({ messages }) => {
  return (
    <CardShadow>
      <BoxIllustration />
      <MobileIllustration />
      <CardContainer>
        <DesktopIllustration />
        <DesktopPlaceholder />
        <FaqContainer>
          <h1>FAQ</h1>
          <FadeTop />
          <AccordionsContainer>
            {messages.map((message, ndx) => (
              <Accordion key={ndx} faq={message} />
            ))}
          </AccordionsContainer>
          <FadeBottom />
        </FaqContainer>
      </CardContainer>
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
    </CardShadow>
  );
};
