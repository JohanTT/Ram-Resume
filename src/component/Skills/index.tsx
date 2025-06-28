import { Typography } from "antd";
import SkillsBox from "./components/SkillBox";

export default function Skills() {
  return (
    <section id="Skills">
      <div className="flex">
        <Typography.Title
          level={4}
          className="pb-2 border-b-2 border-[#272822] border-"
        >
          Skills
        </Typography.Title>
      </div>
      <SkillsBox
        technicalSkills={[
          "NeoVim / Vim Motions",
          "SOLID Principles",
          "CQRS",
          "Refactoring",
          "Debugging",
          "Code Review",
          "Problem Solving",
          "Git",
          "RESTful API",
          "Object-Oriented Programming (OOP)",
          "State Management",
          "Component-based Architecture",
          "Clean Architecture",
          "Repository Pattern",
          "Design Patterns",
        ]}
        softSkills={[
          "Teamwork",
          "Time Management",
          "Knowledge Management",
          "Self-Learning",
          "Critical Thinking",
          "Adaptability",
          "English (Technical Reading & Writing)",
        ]}
      />
    </section>
  );
}
