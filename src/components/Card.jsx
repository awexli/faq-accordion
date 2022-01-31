import styled from 'styled-components';

import { Faq } from './Faq';
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
    padding-bottom: 3rem;
  }

  @media (min-width: 576px) {
    width: 400px;
  }

  @media (min-width: 1280px) {
    position: relative;

    width: 960px;
    height: 410px; // height that prevents layout jank
    padding: 4rem 0 3rem 0;

    display: flex;
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
      <CardContainer>
        <DesktopIllustration />
        <Faq messages={messages} />
      </CardContainer>
      <BoxIllustration />
      <MobileIllustration />
      <Attribution>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/awexli">Alex Li</a>
      </Attribution>
    </CardShadow>
  );
};
