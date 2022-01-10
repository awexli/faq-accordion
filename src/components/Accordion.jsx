import styled from 'styled-components';

import { ArrowDown } from '../assets';

const AccordionContainer = styled.div`
  // margin-bottom: 8px;
  border-bottom: 1px solid var(--divider-grey);
  padding: 4px 0;

  * {
    font-size: var(--font-size-body);

    @media (min-width: 576px) {
      font-size: 14px;
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

  svg {
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
  margin: 0;
  white-space: pre-line;

  max-height: 0;
  overflow: hidden;
  transition: max-height ease-out 0.2s;
`;

export const Accordion = ({ faq }) => {
  const handleArrowClick = () => {
    const answers = Array.from(document.querySelectorAll('.answers'));
    const questions = Array.from(document.querySelectorAll('.questions'));

    answers.map((answer, ndx) => {
      const question = questions[ndx].querySelector('span');
      const chevron = questions[ndx].querySelector('svg');
      const isAnswerShown = answer.style.maxHeight;
      const isQuestionSelected = answer.id === faq.id;

      if (isAnswerShown || !isQuestionSelected) {
        answer.style.maxHeight = null;
        question.style.fontWeight = '500';
        chevron.style.transform = '';
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        question.style.fontWeight = '700';
        chevron.style.transform = 'rotate(180deg)';
      }
    });
  };

  return (
    <AccordionContainer>
      <AccordionHeader className="questions" onClick={handleArrowClick}>
        <AccordionHeading>{faq.question}</AccordionHeading>
        <ArrowDown />
      </AccordionHeader>
      <AccordionMessage id={faq.id} className="answers">
        {faq.answer}
      </AccordionMessage>
    </AccordionContainer>
  );
};
