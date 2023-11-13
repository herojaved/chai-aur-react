import { useState } from "react";
import Child from "./Child";

const Parent = ({ h, hi }) => {
  const [para, setPara] = useState("hi my self siddharth");
  //   let para = "hi";
  //   console.log("parent", hi, h);
  let [cond, setCond] = useState(false);
  const clickevnt = () => {
    setCond(true);
    setPara("geeksforgeeks is hiring");
    console.log(cond, para);
  };

  return (
    <>
      <h1>Parent component</h1>
      {cond ? <p>{para}</p> : "jhshsghsv"}
      {/* <p>{para}</p> */}

      <button onClick={clickevnt}>On click</button>
      <Child h={h} hi={hi}></Child>
      <p>hi thi data from other {h}</p>
    </>
  );
};
export default Parent;