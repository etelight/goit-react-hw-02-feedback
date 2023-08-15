import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handleClick = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
        total: prevState.total + 1,
      };
    });
  };

  calcPositivePercentage = () => {
    const { good, total } = this.state;
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const options = ['good', 'neutral', 'bad'];
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please, leave feedback'}>
          <FeedbackOptions clickFeedback={this.handleClick} options={options} />
        </Section>
        <Section title={'Statistics'}>
          {this.state.total === 0 ? (
            <Notification messege={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.state.total}
              positivePercentage={this.calcPositivePercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
