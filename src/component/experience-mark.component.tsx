import { Col, Flex, Row, Tag, Typography } from "antd";
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
    <div className="grid grid-cols-9 !text-justify">
      <div className="col-span-2 py-4">
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
          <Text className="font-medium">{projectName}</Text>
          <Text>{courseName}</Text>
          <Text>{courseTime}</Text>
        </div>
      </div>
      <div className="col-span-7 py-4">
        <div className="flex flex-col">
          <Text>
            <span className="font-medium">Main responsibilities: </span>
            {mainResponsibilities}
          </Text>
          <Row gutter={16} className="flex m-2 py-2 justify-between">
            <Col span={11}>
              <Text>
                <span className="font-medium">Technologies used: </span>
                {technologies}
              </Text>
            </Col>
            <div className="col-span-1 border-l-2 border-[#E25E3E]"></div>
            <Col span={11}>
              <Text>
                <span className="font-medium">Description: </span>
                {description}
              </Text>
            </Col>
          </Row>
          {props.children}
        </div>
      </div>
    </div>
  );
}
