import {
  FeedbackOptionsWrappper,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';

export default function FeedbackOptions({ clickFeedback, options }) {
  return (
    <FeedbackOptionsWrappper>
      {options.map(option => (
        <FeedbackOptionsButton
          key={option}
          level={option}
          onClick={() => clickFeedback(option)}
        >
          {option}
        </FeedbackOptionsButton>
      ))}
    </FeedbackOptionsWrappper>
  );
}
