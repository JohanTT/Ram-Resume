import { Flex, Typography } from "antd";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="col-span-7">
      <div className="flex flex-col">
        <Flex>
          <Typography.Title
            level={4}
            className="pb-2 border-b-2 border-[#272822]"
          >
            About
          </Typography.Title>
        </Flex>
        <Typography.Text className="">
          I’m a 2 years developer with highly adaptable, team-oriented software developer and a
          strong passion for technology. Known for quickly integrating into
          diverse teams, I bring a high level of responsibility and a commitment
          to delivering clean, maintainable code. My curiosity and drive to
          learn help me stay up to date with the latest tools and practices,
          allowing me to contribute effectively in fast-paced environments.
        </Typography.Text>
      </div>
    </section>
  );
}
