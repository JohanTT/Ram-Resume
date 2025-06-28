import { Flex, Typography } from "antd";
import EducationBox from "./components/EducationBox";

export default function Educations() {
  return (
    <section id="Education">
      <div className="flex">
        <Typography.Title
          level={4}
          className="pb-2 border-b-2 border-[#272822] border-"
        >
          Education & Activities
        </Typography.Title>
      </div>
      <Flex gap={12} wrap="wrap" className="w-full">
        <EducationBox
          courseName="Internship at FPT Telecom"
          projectName="As a Talented Intern."
          courseTime="06.2023 - 06.2024"
        />
        <EducationBox
          courseName="MAAR Project"
          projectName="Student-founded Startup project."
          courseTime="02.2023 - 06.2023"
        />
        <EducationBox
          courseName="Game UIT Hackathon 2022 CodeFest"
          projectName="RPG-Game (New Hope)."
          courseTime="26.11.2022 - 27.11.2022"
        />
        <EducationBox
          courseName="HCM University Of Education"
          projectName="Information Technology."
          courseTime="07.2020 - 03.2024"
        />
      </Flex>
    </section>
  );
}
