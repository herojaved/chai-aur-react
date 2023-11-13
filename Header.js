import Parent from "./Parent";

const Header = (props) => {
  //   console.log(props);
  return (
    <>
      <h1 className="header">Header</h1>
      <p>Hi myself sid</p>
      <h1>{props.message}</h1>
      <h1>{props.message2}</h1>
      <Parent h={props.message} hi={props.message2}></Parent>
    </>
  );
};

export default Header;