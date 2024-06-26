import { Button, Divider, Flex, Space } from "antd";

interface SkillsBoxProps {
  mainSkills: string[];
  solfSkills: string[];
}

export default function SkillsBox(props: SkillsBoxProps) {
  const { mainSkills, solfSkills } = props;
  return (
    <Space direction="vertical">
      <Flex gap="small" wrap="wrap">
        {mainSkills.map((skill) => (
          <Button
            size="large"
            className="font-semibold bg-[#E25E3E] text-[#fff] border-0 rounded flex-grow hover:!bg-[#6C0345] hover:!text-[#fff]"
          >
            {skill}
          </Button>
        ))}
      </Flex>
      <Flex wrap="wrap" className="gap-y-2 rounded" align="center">
        {solfSkills.map((skill, index) => (
          <Button
            size="large"
            className={`relative font-semibold text-[#fff] bg-[#E25E3E] flex-grow rounded-none border-0 hover:!bg-[#6C0345] hover:!text-[#fff] 
              ${index === 0 ? 'rounded-l' : ''} ${index === solfSkills.length - 1 ? 'rounded-r' : ''}`}
          >
            {skill}
            {/* First and last element will not have the divider */}
            {index === 0 || index === solfSkills.length ? '' : <span className="absolute left-0 bg-[#fff] w-[2px] h-2/3" />}
          </Button>
        ))}
      </Flex>
    </Space>
  );
}
