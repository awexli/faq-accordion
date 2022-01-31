import { Accordion } from './Accordion';
import styled from 'styled-components';

const FaqContainer = styled.div`
  position: relative;

  h1 {
    text-align: center;
    margin-top: 0;

    @media (min-width: 1280px) {
      text-align: start;
    }
  }

  @media (min-width: 1280px) {
    padding-left: 1rem;
  }
`;

const AccordionsContainer = styled.div`
  @media (min-width: 1280px) {
    width: 80%;
  }
`;

export const Faq = ({ messages }) => {
  const handleHeaderClick = (faq) => {
    const answers = Array.from(document.querySelectorAll('.answers'));
    const questions = Array.from(document.querySelectorAll('.questions'));

    answers.forEach((answer, ndx) => {
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
    <FaqContainer>
      <h1>FAQ</h1>
      <AccordionsContainer>
        {messages.map((message, ndx) => (
          <Accordion
            key={ndx}
            faq={message}
            onHeaderClick={handleHeaderClick}
          />
        ))}
      </AccordionsContainer>
    </FaqContainer>
  );
};
