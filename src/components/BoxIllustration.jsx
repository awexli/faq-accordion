import styled from 'styled-components';

import { IllustrationBox } from '../assets';

const IllustrationBoxWrapper = styled.div`
  svg {
    position: absolute;
    left: -5.8rem;
    top: 14.2rem;
    z-index: 2;
  }

  @media (max-width: 1279px) {
    display: none;
  }
`;

export const BoxIllustration = () => {
  return (
    <IllustrationBoxWrapper>
      <IllustrationBox />
    </IllustrationBoxWrapper>
  );
};
