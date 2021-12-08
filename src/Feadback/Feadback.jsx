import { Component } from "react";
import Statistic from "./Statistic/Statistic";

class Feadback extends Component {
  state = {
    good: this.props.good,
    neutral: 0,
    bad: 0,
  };

  increaseFeedback = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  degreaseFeedback = () => {
    this.setState((pervState) => {
      return {
        bad: pervState.bad + 1,
      };
    });
  };

  neutralFeedback = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;

  countPositiveFeedbackPercentage = () => {
    return Math.floor((100 / this.countTotalFeedback()) * this.state.good);
  };

  render() {
    return (
      <>
        <button type="button" onClick={this.increaseFeedback}>
          Good
        </button>
        <button type="button" onClick={this.neutralFeedback}>
          Neutral
        </button>
        <button type="button" onClick={this.degreaseFeedback}>
          Bad
        </button>

        <Statistic
          state={this.state}
          counterFeedback={this.countTotalFeedback()}
          cpountPosFeedback={this.countPositiveFeedbackPercentage()}
        />
      </>
    );
  }
}

export default Feadback;
