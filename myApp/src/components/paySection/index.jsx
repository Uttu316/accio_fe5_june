const PaySection = () => {
  const price = 2500;

  const onPay = () => {
    alert("Payment success");
  };
  return (
    <>
      <h3>Enroll Now</h3>
      <h2>Price {price + "Rs"}.</h2>
      <button className="paybtn" onClick={onPay}>
        Pay now
      </button>
    </>
  );
};

export default PaySection;
