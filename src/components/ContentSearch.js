import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Search } = Input;
const ContentSearch = () => {
  function handleEvent() {}
  const onSearch = (value) => console.log(value);
  return (
    <div style={{ borderColor: "#516FD4" }}>
      <Input
        size="large"
        className="hover"
        placeholder="Search users"
        prefix={<SearchOutlined onClick={handleEvent} onSearch={onSearch} />}
      />
    </div>
  );
};
export default ContentSearch;
