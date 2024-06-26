import { Button, Flex, Row, Typography } from "antd";

interface EducationBoxProps {
    courseName: string;
    projectName: React.ReactNode;
    courseTime: string;
}

export default function EducationBox(props: EducationBoxProps) {
    const { courseName, projectName, courseTime } = props;
    return (
        <Flex vertical gap="small" wrap="wrap" className="p-4 bg-[#e0e0d8] text-[#fff] border-0 rounded flex-grow">
            <Row>
                <Typography.Text className="font-semibold">
                    {courseName}
                </Typography.Text>
            </Row>
            <Row>
                <Flex vertical>
                    <Typography.Title level={5} className="!mb-0">
                        {projectName}
                    </Typography.Title>
                    <Typography.Text className="text-gray-500">
                        {courseTime}
                    </Typography.Text>
                </Flex>
            </Row>
        </Flex>
    );
}
