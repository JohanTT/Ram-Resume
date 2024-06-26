import { Flex, Row, Tag, Typography } from "antd";

interface AchievementTagProps {
    icon?: React.ReactNode;
    title?: string;
    description?: string;
}

export default function AchievementTag(props: AchievementTagProps) {
    return (
        <Flex className="bg-[#ddddd2] rounded p-2 my-2">
            <Tag
                color="#6C0345"
                bordered={false}
                className="font-bold text-[18px] self-center content-center h-10"
            >
                {props.icon}
            </Tag>
            <Row>
                <Typography.Text className="text-gray-500">{props.title}</Typography.Text>
                <b>
                    {props.description}
                </b>
            </Row>
        </Flex>
    )
}