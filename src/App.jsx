import styled, { createGlobalStyle } from 'styled-components';

import { Accordion } from './components/Accordion';

const GlobalStyles = createGlobalStyle`
  html {
    --color-text-primary-dark: hsl(238, 29%, 16%);
    --color-text-primary-red: hsl(14, 88%, 65%);
    --color-text-neutral-dark: hsl(237, 12%, 33%);
    --color-text-neutral-grey: hsl(240, 6%, 50%);

    --gradient-violet: hsl(273, 75%, 66%);
    --gradient-blue: hsl(240, 73%, 65%);

    --divider-grey: hsl(240, 5%, 91%);

    --font-size-body: 12px;
  }
`;

const MainContainer = styled.div`
  background: var(--gradient-violet);
  background: linear-gradient(
    var(--gradient-violet) 35%,
    var(--gradient-blue) 100%
  );
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainCard = styled.div`
  background: white;
  width: 300px;
  height: 70%;
  overflow: hidden;
  border-radius: calc(16px * 1.5);
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const CardWrapper = styled.div`
  padding: 1rem;
`;

const messages = {
  i: {
    question: 'What is the maximum file upload size?',
    answer:
      'No more than 2GB. All files in your account must fit your allotted storage space',
  },
};

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <MainCard>
          <CardWrapper>
            <h1>FAQ</h1>
            <Accordion faq={messages.i}/>
          </CardWrapper>
        </MainCard>
      </MainContainer>
    </>
  );
};
