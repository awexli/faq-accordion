import styled from 'styled-components';

import { ArrowDown } from '../assets';

const AccordionContainer = styled.div`
  * {
    font-size: var(--font-size-body);
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AccordionHeading = styled.h2`
  margin: 0;
`;

const AccordionMessage = styled.p`
  color: var(--color-text-neutral-grey);
  line-height: 1.5;
  height: 40px;
`;

export const Accordion = ({ faq }) => {
  return (
    <AccordionContainer>
      <AccordionHeader>
        <AccordionHeading>{faq.question}</AccordionHeading>
        <ArrowDown />
      </AccordionHeader>
      <AccordionMessage>{faq.answer}</AccordionMessage>
    </AccordionContainer>
  );
};
