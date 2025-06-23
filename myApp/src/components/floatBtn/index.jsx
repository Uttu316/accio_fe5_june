const FloatBtn = (props) => {
  const { title, icon } = props;
  return (
    <div className="floatBtn">
      <span>{title}</span>
      <span>{icon}</span>
    </div>
  );
};
export default FloatBtn;
