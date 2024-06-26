import { Col, Collapse, Flex, Row, Space, Tag, Typography } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

interface ExperienceMarkProps {
  role: string;
  companyName: string;
  projectName: string;
  courseName: string;
  courseTime: string;
  mainResponsibilities: string;
  technologies: React.ReactNode;
  description: string;
}

export default function ExperienceMark(
  props: ExperienceMarkProps & { children?: React.ReactNode }
) {
  const { Text } = Typography;
  const {
    role,
    companyName,
    projectName,
    courseName,
    courseTime,
    mainResponsibilities,
    technologies,
    description,
  } = props;
  return (
    <div className="grid grid-cols-10 !text-justify">
      <div className="col-span-3">
        <div className="flex flex-col gap-1">
          <Flex>
            <div className="flex items-center relative">
              <div
                className="absolute inset-x-0 top-1 h-5 bg-[#eed016] z-0"
                style={{ filter: "url(#marker-shape)" }}
              ></div>
              <Text className="z-10 font-medium text-[15px]">{role}</Text>
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
          <Flex>
            <Tag color="#6C0345" bordered={false} className="font-medium my-1">
              <EnvironmentOutlined /> {companyName}
            </Tag>
          </Flex>
          <Text className="font-semibold">{projectName}</Text>
          <Text className="font-medium">{courseName}</Text>
          <Text className="text-gray-500">{courseTime}</Text>
        </div>
      </div>
      <div className="col-span-7">
        <Space className="flex flex-col" direction="vertical">
          <Text>
            <span className="font-medium">Main responsibilities: </span>
            {mainResponsibilities}
          </Text>
          {props.children}
        </Space>
      </div>
      <Row gutter={16} className="col-span-10 flex m-2 py-2 justify-between">
        <Col span={11}>
          <Collapse
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
      </Row>
    </div>
  );
}
