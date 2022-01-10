import styled, { createGlobalStyle } from 'styled-components';

import { Card } from './components/Card';

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

  // Expands background gradient on small viewports
  min-height: 100vh;
  max-height: 150vh;
  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-primary-dark);
`;

const messages = [
  {
    id: 'q1',
    question: 'How many team members can I invite?',
    answer:
      'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
  },
  {
    id: 'q2',
    question: 'What is the maximum file upload size?',
    answer:
      'No more than 2GB. All files in your account must fit your allotted storage space',
  },
  {
    id: 'q3',
    question: 'How do I reset my password?',
    answer:
      'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
  },
  {
    id: 'q4',
    question: 'Can I cancel my subscription?',
    answer:
      'Yes! Send us a message and we’ll process your request no questions asked.',
  },
  {
    id: 'q5',
    question: 'Do you provide additional support?',
    answer:
      'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
  },
];

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Card messages={messages} />
      </MainContainer>
    </>
  );
};
