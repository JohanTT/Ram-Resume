import { Flex, Row, Tag, Tooltip, Typography } from "antd";
import { BookOutlined, StarOutlined, TrophyOutlined } from "@ant-design/icons";
import { Dayjs } from "dayjs";

type AchievementTagProps = {
  type: "project" | "commendation" | "honor";
  time?: Dayjs;
  project?: string;
  title?: string;
  description?: string;
};

export default function AchievementTag(props: AchievementTagProps) {
  console.log("AchievementTag", props);
  const iconMap: Record<AchievementTagProps["type"], React.ReactNode> = {
    project: <TrophyOutlined />,
    commendation: <StarOutlined />,
    honor: <BookOutlined />,
  };

  return (
    <Flex className="bg-[#ddddd2] rounded p-2">
      <Tag
        color="#6C0345"
        bordered={false}
        className="font-bold text-[18px] self-center content-center h-10"
      >
        {iconMap[props.type]}
      </Tag>
      <Row>
        <Tooltip title={props.description} placement="topLeft">
          <Flex className="">
            <Typography.Text className="text-gray-600">
              {props.project}
            </Typography.Text>
            <span className="mx-1 text-gray-600"> - </span>
            <Typography.Text className="text-gray-600">
              {props.time?.format("MMM YYYY")}
            </Typography.Text>
          </Flex>
          <Typography.Text className="font-medium">{props.title}</Typography.Text>
        </Tooltip>
      </Row>
    </Flex>
  );
}
