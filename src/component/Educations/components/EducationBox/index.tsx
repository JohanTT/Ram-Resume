import { Flex, Typography } from "antd";

interface EducationBoxProps {
  courseName: string;
  projectName: React.ReactNode;
  courseTime: string;
}

export default function EducationBox(props: EducationBoxProps) {
  const { courseName, projectName, courseTime } = props;
  return (
    <Flex vertical className="p-3 bg-[#e0e0d8] text-[#fff] border-0 rounded">
      <Typography.Text className="font-semibold">{courseName}</Typography.Text>
      {typeof projectName === "string" ? (
        <Typography.Title level={5} className="!mb-0 mt-2">
          {projectName}
        </Typography.Title>
      ) : (
        projectName
      )}
      <Typography.Text className="text-gray-500">{courseTime}</Typography.Text>
    </Flex>
  );
}
