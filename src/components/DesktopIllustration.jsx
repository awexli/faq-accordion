import styled from 'styled-components';

import logo from '../assets/illustration-woman-online-desktop.svg';
import { BackgroundDesktop } from '../assets';

const IllustrationWrapperDesktop = styled.div`
  img {
    z-index: 1;
    position: absolute;
    left: -5rem;
    top: 4.5rem;
  }

  ///
  // BackgroundDesktop (pattern)
  svg {
    position: absolute;
    z-index: 0;
    top: -18.5rem;
    left: -36rem;
  }

  @media (max-width: 1279px) {
    display: none;
  }
`;



// Prevents Faq container from shifting left
// when image is position absolute
const Skeleton = styled.div`
  width: 472px;
`;

export const DesktopIllustration = () => {
  return (
    <IllustrationWrapperDesktop>
      <Skeleton />
      {/* Only way to get the svg shadows showing */}
      <img
        src={logo}
        alt="illustration of women working in front of computer desk"
      ></img>
      <BackgroundDesktop />
    </IllustrationWrapperDesktop>
  );
};
