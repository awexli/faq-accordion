import styled from 'styled-components';

import {
  IllustrationDesktop,
  BackgroundDesktop,
} from '../assets';

const IllustrationWrapperDesktop = styled.div`
  height: 350px;

  svg {
    z-index: 1;
    position: absolute;
    left: -5rem;

    :nth-child(2) {
      z-index: 0;
      bottom: -8rem;
      left: -35rem;
    }
  }

  @media (max-width: 1279px) {
    display: none;
  }
`;

export const DesktopIllustration = () => {
  return (
    <IllustrationWrapperDesktop>
      <IllustrationDesktop />
      <BackgroundDesktop />
    </IllustrationWrapperDesktop>
  );
};
