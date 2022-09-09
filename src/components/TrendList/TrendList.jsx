const TrendList = ({ trend }) => {
  console.log(trend);
  return (
    <ul>
      {trend.length !== 0 &&
        trend.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })}
    </ul>
  );
};

export default TrendList;
