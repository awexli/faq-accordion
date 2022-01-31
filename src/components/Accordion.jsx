import styled from 'styled-components';

import { ArrowDown } from '../assets';

const AccordionWrapper = styled.div`
  border-bottom: 1px solid var(--divider-grey);
  padding-top: 1rem;

  * {
    font-size: var(--font-size-body);

    @media (min-width: 576px) {
      font-size: 14px;
    }
  }
`;

const AccordionHeader = styled.button`
  font-family: inherit;
  cursor: pointer;

  ///
  // clean default button styles
  border: none;
  background: none;
  padding: 0;
  margin: 0;

  ///
  // position header text and chevron
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center; // center chevron

  ///
  // chevron
  svg {
    transition: transform ease 0.3s;
  }

  span {
    font-size: 14px;
    @media (min-width: 576px) {
      font-size: 1rem;
    }
  }

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

const AccordionHeading = styled.span`
  /* margin: 10px 0; */
`;

const AccordionMessage = styled.p`
  color: var(--color-text-neutral-grey);
  line-height: 1.5;
  white-space: pre-line;

  margin: 8px 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height ease-out 0.2s;
`;

export const Accordion = ({ faq, onHeaderClick }) => {
  return (
    <AccordionWrapper>
      <AccordionHeader className="questions" onClick={() => onHeaderClick(faq)}>
        <AccordionHeading>{faq.question}</AccordionHeading>
        <ArrowDown />
      </AccordionHeader>
      <AccordionMessage id={faq.id} className="answers">
        {faq.answer}
      </AccordionMessage>
    </AccordionWrapper>
  );
};
