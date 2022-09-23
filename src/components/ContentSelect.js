import { Input } from "antd";
import searchicon from "../img/search-icon.svg";
const ContentSelect = (props) => {
  function handleReactJS() {
    props.onHandleData("reactjs");
  }
  function handleNodeJs() {
    props.onHandleData("nodejs");
  }
  function handleCss() {
    props.onHandleData("css");
  }
  function handleJs() {
    props.onHandleData("js");
  }
  function handlePython() {
    props.onHandleData("python");
  }

  return (
    <div className="flex gap-2">
      <div
        className="font-medium rounded-lg p-4 hover:bg-violet-400 cursor-pointer"
        onClick={handleReactJS}
      >
        ReactJs
      </div>
      <div
        className="font-medium rounded-lg p-4 hover:bg-violet-400 cursor-pointer"
        //style={{ backgroundColor: " #849FFF" }}
        onClick={handleNodeJs}
      >
        NodeJs
      </div>
      <div
        className="font-medium rounded-lg p-4 hover:bg-violet-400 cursor-pointer"
        onClick={handleCss}
      >
        Css
      </div>
      <div
        className="font-medium rounded-lg p-4 hover:bg-violet-400 cursor-pointer"
        onClick={handleJs}
      >
        Js
      </div>
      <div
        className="font-medium rounded-lg p-4 hover:bg-violet-400 cursor-pointer"
        onClick={handlePython}
      >
        Python
      </div>
    </div>
  );
};
export default ContentSelect;
