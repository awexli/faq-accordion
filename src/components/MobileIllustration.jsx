import styled from 'styled-components';

import { IllustrationMobile, BackgroundMobile } from '../assets';

const IllustrationWrapperMobile = styled.div`
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

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const MobileIllustration = () => {
  return (
    <IllustrationWrapperMobile>
      <IllustrationMobile />
      <BackgroundMobile />
    </IllustrationWrapperMobile>
  );
};
