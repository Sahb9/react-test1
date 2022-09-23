import { Card } from "antd";

const ContentCard = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <>
      <Card
        bordered={true}
        style={{
          width: 327,
          height: 208,
        }}
      >
        <div className="flex ">
          <div>
            <img src={data.img} alt={data.name} />
          </div>

          <div>
            <div className="font-black"> {data.name}</div>
            <div> {data.sub}</div>
            <div>
              {data.tech.map((techvalue) => (
                <div
                  style={{ borderColor: "#BFC8E6" }}
                  className="border-solid"
                >
                  <p className="rounded-xl ">{techvalue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default ContentCard;
