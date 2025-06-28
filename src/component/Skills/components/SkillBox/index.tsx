import { Button, Divider, Flex, Space } from "antd";
import ExperienceDivider from "../../../Experiences/components/ExperienceDivider";

type SkillsBoxProps = {
  technicalSkills: string[];
  softSkills: string[];
};

export default function SkillsBox({
  technicalSkills,
  softSkills,
}: SkillsBoxProps) {
  return (
    <Space direction="vertical">
      <ExperienceDivider title="TechnicalSkills" />
      <Flex gap="small" wrap="wrap">
        {technicalSkills.map((skill) => (
          <Button
            size="large"
            className="font-semibold bg-[#E25E3E] text-[#fff] border-0 rounded flex-grow hover:!bg-[#6C0345] hover:!text-[#fff]"
          >
            {skill}
          </Button>
        ))}
      </Flex>
      <ExperienceDivider title="Soft Skills" />
      <Flex wrap="wrap" className="gap-y-2 rounded" align="center">
        {softSkills.map((skill, index) => (
          <Button
            size="large"
            className={`relative font-semibold text-[#fff] bg-[#E25E3E] flex-grow rounded-none border-0 hover:!bg-[#6C0345] hover:!text-[#fff] 
              ${index === 0 ? "rounded-l" : ""} ${
              index === softSkills.length - 1 ? "rounded-r" : ""
            }`}
          >
            {skill}
            {index === 0 || index === softSkills.length ? (
              ""
            ) : (
              <span className="absolute left-0 bg-[#fff] w-[2px] h-2/3" />
            )}
          </Button>
        ))}
      </Flex>
    </Space>
  );
}
