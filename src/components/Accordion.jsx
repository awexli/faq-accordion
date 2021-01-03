import { useState } from 'react';
import styled from 'styled-components';

import { ArrowDown } from '../assets';

const AccordionContainer = styled.div`
  margin-bottom: 8px;
  border-bottom: 1px solid var(--divider-grey);

  /* Important for expanding & contracting accordion */
  max-height: 45px;
  overflow: hidden;
  transition: max-height ease-out 0.2s;

  * {
    font-size: var(--font-size-body);

    @media (min-width: 576px) {
      font-size: 16px;
    }
  }
`;

const AccordionHeader = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;

  width: 100%;
  cursor: pointer;
  border: none;
  background: none;

  color: var(--color-text-primary-dark);  
  transition: color ease 0.1s;

  :hover {
    color: var(--color-text-primary-red);
  }
  
  :focus {
    outline: none;
    color: var(--color-text-primary-red);
  }
`;

const AccordionHeading = styled.h2`
  margin: 8px 0;
`;

const AccordionMessage = styled.p`
  color: var(--color-text-neutral-dark);
  line-height: 1.5;
  margin: 8px 0;
  white-space: pre-line;
`;

const getAccordionContainer = (currentTarget) => {
  let parent = currentTarget.parentNode;

  while (!parent.id.includes('accordion-')) {
    parent = parent.parentNode;
  }

  return parent;
};

export const Accordion = ({ faq, id }) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleArrowClick = (e) => {
    const target = e.target;
    const accordion = getAccordionContainer(target);

    // Assuming there will always be an accordion container
    if (accordion.style.maxHeight) {
      accordion.style.maxHeight = null;
    } else {
      accordion.style.maxHeight = accordion.scrollHeight + 'px';
    }

    setIsExpand(!isExpand);
  };

  return (
    <AccordionContainer id={id}>
      <AccordionHeader onClick={handleArrowClick}>
        <AccordionHeading>{faq.question}</AccordionHeading>
        <ArrowDown isExpand={isExpand} />
      </AccordionHeader>
      <AccordionMessage>{faq.answer}</AccordionMessage>
    </AccordionContainer>
  );
};
