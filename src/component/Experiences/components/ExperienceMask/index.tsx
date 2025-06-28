import { Flex, Space, Typography } from "antd";

export type ExperienceMarkProps = {
  role?: string;
  companyName: string;
  projectName: string;
  courseName: string;
  courseTime: string;
  mainResponsibilities: string;
  subDomains: SubDomainModel[];
  technologies: TechnologyModel;
  description?: string;
};

type TechnologyModel = {
  fe?: string[];
  be?: string[];
  db?: string[];
  other?: string[];
};

type SubDomainModel = {
  name: string;
  description?: string;
};

export default function ExperienceMark(
  props: ExperienceMarkProps & { children?: React.ReactNode }
) {
  const { Text } = Typography;
  const {
    companyName,
    projectName,
    courseName,
    courseTime,
    technologies,
    mainResponsibilities,
  } = props;
  return (
    <div className="grid grid-cols-10">
      <div className="col-span-3">
        <div className="flex flex-col gap-1">
          <Text className="font-semibold">{projectName}</Text>
          <Flex>
            <div className="flex items-center relative">
              <div
                className="absolute inset-x-0 top-1 h-5 bg-[#eed016] z-0"
                style={{ filter: "url(#marker-shape)" }}
              ></div>
              <Text className="z-10 font-medium text-[15px]">
                {companyName}
              </Text>
              <svg
                xmlns="//www.w3.org/2000/svg"
                version="1.1"
                className="svg-filters hidden"
              >
                <defs>
                  <filter
                    id="marker-shape"
                    className=" z-0 absolute inset-x-0 top-1 "
                  >
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0 0.2"
                      numOctaves="2"
                      result="warp"
                    />
                    <feDisplacementMap
                      xChannelSelector="R"
                      yChannelSelector="G"
                      scale="30"
                      in="SourceGraphic"
                      in2="warp"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </Flex>
          <Text className="font-medium">{courseName}</Text>
          {/* <Flex>
            <Tag color="#6C0345" bordered={false} className="font-medium my-1">
              <EnvironmentOutlined /> {companyName}
            </Tag>
          </Flex> */}
          <Text className="text-gray-500">{courseTime}</Text>
        </div>
      </div>
      <div className="col-span-7">
        <Space className="flex flex-col" direction="vertical">
          <div>
            <Text className="font-semibold">Main Responsibility:&nbsp;</Text>
            <Text>{mainResponsibilities}</Text>
          </div>
          <div>
            <Text className="font-semibold">Tech Stack:&nbsp;</Text>
            <ul className="list-disc pl-5">
              {technologies.fe && technologies.fe.length > 0 && (
                <li key={"FE"} className="">
                  <Text className="font-medium">Frontend</Text>:&nbsp;
                  <Text>{technologies.fe?.join(", ")}.</Text>
                </li>
              )}
              {technologies.be && technologies.be.length > 0 && (
                <li key={"BE"} className="">
                  <Text className="font-medium">Backend</Text>:&nbsp;
                  <Text>{technologies.be?.join(", ")}.</Text>
                </li>
              )}
              {technologies.db && technologies.db.length > 0 && (
                <li key={"DB"} className="">
                  <Text className="font-medium">Database</Text>:&nbsp;
                  <Text>{technologies.db?.join(", ")}.</Text>
                </li>
              )}
              {technologies.other && technologies.other.length > 0 && (
                <li key={"Other"} className="">
                  <Text className="font-medium">Tools</Text>:&nbsp;
                  <Text>{technologies.other?.join(", ")}.</Text>
                </li>
              )}
            </ul>
          </div>
          <div>
            <Text className="font-semibold">
              Key Subdomains & Contributions:&nbsp;
            </Text>
            <ul className="list-disc pl-5">
              {props.subDomains.map((subDomain, index) => (
                <li key={index} className="">
                  <Text className="font-medium">{subDomain.name}</Text>:&nbsp;
                  <Text>{subDomain.description}</Text>
                </li>
              ))}
            </ul>
          </div>
        </Space>
      </div>
      {/* <Row gutter={16} className="col-span-10 flex m-2 py-2 justify-between">
        <Col span={11}>
          <Collapse
            defaultActiveKey={["1"]}
            bordered={false}
            items={[
              {
                key: "1",
                label: <span className="font-medium">Technologies used</span>,
                children: <Text>{technologies}</Text>,
              },
            ]}
          />
        </Col>
        <div className="col-span-1 border-l-2 border-[#E25E3E]"></div>
        <Col span={11}>
          <Collapse
            defaultActiveKey={["1"]}
            bordered={false}
            items={[
              {
                key: "1",
                label: <span className="font-medium">App description</span>,
                children: <Text>{description}</Text>,
              },
            ]}
          />
        </Col>
      </Row> */}
    </div>
  );
}
