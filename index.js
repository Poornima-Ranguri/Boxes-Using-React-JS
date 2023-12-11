const Box = (props) => {
  //  Write your code here.
  const { box, text } = props;
  return <p className={box}>{text}</p>;
};

const element = (
  <div className="home">
    <div className="text-content">
      <h1 className="heading">Boxes</h1>
    </div>

    <div className="boxes-container">
      <Box box="box-1" text="small" />
      <Box box="box-2" text="Medium" />
      <Box box="box-3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
