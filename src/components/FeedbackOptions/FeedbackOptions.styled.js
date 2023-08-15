import styled from 'styled-components';

export const FeedbackOptionsWrappper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const getBtnColor = ({ level }) => {
  switch (level) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'yellow';
    case 'bad':
      return 'red';
    default:
      return 'green';
  }
};

export const FeedbackOptionsButton = styled.button`
  background-color: ${getBtnColor};
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
