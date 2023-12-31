/* eslint-disable react/prop-types */
const CardBody = (props) => {
  const { variant, children, className, key } = props;
  let cardStyle = "";

  switch (variant) {
    case "backdrop":
      cardStyle += "card-body-backdrop";
      break;
    case "card-backdrop":
      cardStyle += "card-backdrop";
      break;
  }

  return (
    <div key={key} className={`${cardStyle} ${className}`}>
      {children}
    </div>
  );
};

export default CardBody;
