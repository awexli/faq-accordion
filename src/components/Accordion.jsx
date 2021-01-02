import { useState } from 'react';
import styled from 'styled-components';

import { ArrowDown } from '../assets';

const AccordionContainer = styled.div`
  margin-bottom: 8px;
  border-bottom: 1px solid var(--divider-grey);

  // Important for animation
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

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  transition: color ease 0.1s;
  
  :hover {
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

const ArrowButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;

  :focus {
    outline: none;
  }
`;

const getAccordionContainer = (numOfChildren, currentTarget) => {
  let parent = currentTarget;

  for (let i = 0; i < numOfChildren; ++i) {
    parent = parent.parentNode;
  }

  return parent;
}

export const Accordion = ({ faq }) => {
  const [expand, setExpand] = useState(false);

  const handleArrowClick = (e) => {
    const target = e.target;
    let panel;

    if (target.nodeName === "path") {
      panel = getAccordionContainer(4, target);
    } else if (target.nodeName === 'svg') {
      panel = getAccordionContainer(3, target);
    } else if (target.nodeName === 'H2' || target.nodeName === 'BUTTON') {
      panel = getAccordionContainer(2, target);
    } else {
      panel = target.parentNode;
    }

    if (!panel) {
      setExpand(!expand);
      return;
    }
    
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }

    setExpand(!expand);
  };

  return (
    <AccordionContainer isExpand={expand}>
      <AccordionHeader onClick={handleArrowClick}>
        <AccordionHeading>{faq.question}</AccordionHeading>
        <ArrowButton>
          <ArrowDown isExpand={expand} />
        </ArrowButton>
      </AccordionHeader>
      <AccordionMessage>{faq.answer}</AccordionMessage>
    </AccordionContainer>
  );
};
