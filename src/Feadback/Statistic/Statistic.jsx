const Statistic = ({ state, counterFeedback, cpountPosFeedback }) => {
  return (
    <>
      <h2>Statistic</h2>
      <div>Good: {state.good}</div>
      <div>Neutral: {state.neutral}</div>
      <div>Bad: {state.bad}</div>
      <div>Total: {counterFeedback}</div>
      <div>Positive feedback: {cpountPosFeedback}%</div>
    </>
  );
};

export default Statistic;
