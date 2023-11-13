import GrandChild from "./GrandChild";

const Child = ({ h, hi }) => {
  //   console.log("child", h);
  return (
    <>
      <h1>Chil component</h1>
      <GrandChild h={h} hi={hi}></GrandChild>
    </>
  );
};
export default Child;