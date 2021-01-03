import styled from 'styled-components';

import logo from '../assets/illustration-woman-online-desktop.svg';
import { BackgroundDesktop } from '../assets';

const IllustrationWrapperDesktop = styled.div`
  height: 350px;

  img {
    z-index: 1;
    position: absolute;
    left: -5rem;
  }
  
  svg {
    position: absolute;
    z-index: 0;
    bottom: -8rem;
    left: -35rem;
  }

  @media (max-width: 1279px) {
    display: none;
  }
`;

export const DesktopIllustration = () => {
  return (
    <IllustrationWrapperDesktop>
      {/* Only way to get the svg shadows showing */}
      <img src={logo} alt="illustration of women working in front of computer desk"></img>
      <BackgroundDesktop />
    </IllustrationWrapperDesktop>
  );
};
