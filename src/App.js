import "./App.css";
import { useState } from "react";

import ContentCard from "./components/ContentCard";
import ContentSearch from "./components/ContentSearch";
import ContentSelect from "./components/ContentSelect";
import nv1 from "./img/1.png";
import nv2 from "./img/2.png";
import nv3 from "./img/3.png";
import nv4 from "./img/4.png";
import nv5 from "./img/5.png";
import nv6 from "./img/6.png";
import searchicon from "./img/search-icon.svg";
const data = [
  {
    name: "Lelah Nichols",
    sub: "Troy, MI",
    img: nv1,
    tech: ["reactjs", "nodejs"],
  },
  {
    name: "Jesus Weiss",
    sub: "Fort Worth, TX",
    img: nv2,
    tech: ["nodejs", "js", "reactjs", "css"],
  },
  {
    name: "Annie Rice",
    sub: "Austin, TX",
    img: nv3,
    tech: ["nodejs", "python", "js", "css", "reactjs"],
  },
  {
    name: "Robert Brower",
    sub: "Cincinnati, OH",
    img: nv4,
    tech: ["css", "js", "reactjs", "nodejs"],
  },
  {
    name: "Amy Campbell",
    sub: "Warrior, AL",
    img: nv5,
    tech: ["python", "nodejs"],
  },
  {
    name: "Anthony S. Morin",
    sub: "Lyndhurst, NJ",
    img: nv6,
    tech: ["nodejs", "js"],
  },
];

function App() {
  const [value, setValue] = useState(data);

  function handleData(titleTech) {
    let arr = getDataByTech(data, titleTech);
    setValue(arr);
  }
  function resetData() {
    setValue(data);
  }
  const getDataByTech = (data, title) => {
    return data.filter((item) =>
      item.tech.map((c) => title.includes(c)).includes(true)
    );
  };
  //console.log(getDataByTech(data, "css"));

  function handleSearch(dataSearch) {
    let arr = value.find((item) => item.name === dataSearch);
    console.log(arr);

    setValue([arr]);
  }
  return (
    <div className="m-6">
      <div
        className="font-black hover cursor-pointer"
        style={{ fontSize: "32px" }}
        onClick={resetData}
      >
        Users
      </div>
      <div
        className="flex  justify-around items-center"
        style={{ marginBottom: "30px" }}
      >
        <ContentSearch onHandleSearch={handleSearch} />
        <ContentSelect onHandleData={handleData} />
      </div>
      <div className="grid grid-cols-3 gap-1">
        {value.map(function (item) {
          // console.log(item);
          return <ContentCard data={item}></ContentCard>;
        })}
      </div>
    </div>
  );
}

export default App;
