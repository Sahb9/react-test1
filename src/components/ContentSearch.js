import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;
const ContentSearch = (props) => {
  const onSearch = function (value) {
    props.onHandleSearch(value);
    console.log(value);
  };
  return (
    <div style={{ borderColor: "#516FD4" }}>
      <Search placeholder="Search users" onSearch={onSearch} enterButton />
    </div>
  );
};
export default ContentSearch;
