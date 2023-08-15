import { StatisticsItem } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <StatisticsItem>Good: {good}</StatisticsItem>
      <StatisticsItem>Neutral: {neutral}</StatisticsItem>
      <StatisticsItem>Bad: {bad} </StatisticsItem>
      <StatisticsItem>Total: {total} </StatisticsItem>
      <StatisticsItem>
        Positive percentage: {positivePercentage}%
      </StatisticsItem>
    </div>
  );
}
