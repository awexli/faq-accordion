import { useState } from 'react';
import styled from 'styled-components';

import { ArrowDown } from '../assets';

const AccordionContainer = styled.div`
  margin-bottom: 8px;
  border-bottom: 1px solid var(--divider-grey);
  padding: 4px 0;

  * {
    font-size: var(--font-size-body);

    @media (min-width: 576px) {
      font-size: 16px;
    }
  }
`;

const AccordionHeader = styled.button`
  font-family: 'Kumbh Sans', sans-serif;
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

  span {
    font-weight: ${({ isExpand }) => (isExpand ? '700' : '500')};
  }

  svg {
    transform: ${({ isExpand }) => (isExpand ? 'rotate(180deg)' : '')};
    transition: transform ease 0.3s;
  }

  :hover {
    color: var(--color-text-primary-red);
  }

  :focus {
    outline: none;
    color: var(--color-text-primary-red);
  }
`;

const AccordionHeading = styled.span`
  margin: 10px 0;
`;

const AccordionMessage = styled.p`
  color: var(--color-text-neutral-grey);
  line-height: 1.5;
  margin: 4px 0;
  white-space: pre-line;

  /* Expanding & contracting accordion styles */
  max-height: 0;
  overflow: hidden;
  transition: max-height ease-out 0.2s;
`;

const getAccordionMessage = (currentTarget) => {
  while (true) {
    // break loop in the event it reaches root node - however, this should never be the case
    if (!currentTarget.parentNode) {
      return 'whet';
    }
    // "bubble up" until there is a sibling element
    else if (!currentTarget.nextElementSibling) {
      currentTarget = currentTarget.parentNode;
    }
    // "bubble up" until nextElementSibling is AccordionMessage
    else if (!currentTarget.nextElementSibling.classList.contains('message')) {
      // currentTarget will eventually be AccordionHeader
      currentTarget = currentTarget.parentNode;
    } else {
      break;
    }
  }

  // return AccordionMessage
  return currentTarget.nextElementSibling;
};

export const Accordion = ({ faq }) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleArrowClick = (e) => {
    const message = getAccordionMessage(e.target);

    if (message === 'whet') {
      return alert('whet');
    } else if (message.style.maxHeight) {
      message.style.maxHeight = null;
    } else {
      message.style.maxHeight = message.scrollHeight + 'px';
    }

    setIsExpand(!isExpand);
  };

  return (
    <AccordionContainer>
      <AccordionHeader isExpand={isExpand} onClick={handleArrowClick}>
        <AccordionHeading>{faq.question}</AccordionHeading>
        <ArrowDown />
      </AccordionHeader>
      <AccordionMessage className="message">{faq.answer}</AccordionMessage>
    </AccordionContainer>
  );
};
