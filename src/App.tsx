import "./App.css";
import { Col, Divider, Flex, Row, Space, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  HomeOutlined,
  BookOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import {} from "@ant-design/icons";
import ExperienceDivider from "./component/experience-divider.component";
import ExperienceMark from "./component/experience-mark.component";
import SkillsBox from "./component/skills-box.component";
import AchievementTag from "./component/achievement-tag.component";
import EducationBox from "./component/education-box.component";

const { Title, Text } = Typography;

function App() {
  return (
    <main className="">
      <section id="MyName" className="pt-10 mx-16">
        <div className="bg-[#efd318] w-[120px] h-[120px] rounded-full absolute z-0 top-12"></div>
        <div className="relative ml-7">
          <Title className="!m-0 !font-bold z-10 tracking-wide">
            Cao Viet Thang
          </Title>
        </div>
      </section>
      <div className="grid grid-cols-12 gap-y-5 mx-16">
        <div className="col-span-3 relative ml-7">
          <Title level={4} className="!m-0 z-10 !font-[350] tracking-wide">
            Full-Stack Developer
          </Title>
        </div>
        <section id="Contact" className="col-span-9">
          <div className="py-4">
            <div className="border-b-2 border-[#272822]"></div>
          </div>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={12} lg={6}>
              <div className="grid grid-cols-3">
                <Text className="col-span-1 flex justify-center items-start mr-1">
                  <MailOutlined className="text-4xl pb-1 border-b-2 border-[#272822]" />
                </Text>
                <div className="col-span-2 flex flex-col">
                  <Text className="font-semibold">Email</Text>
                  <Text>thejohan39@gmail.com</Text>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6}>
              <div className="grid grid-cols-3">
                <Text className="col-span-1 flex justify-center items-start mr-1">
                  <PhoneOutlined className="text-4xl pb-1 border-b-2 border-[#272822]" />
                </Text>
                <div className="col-span-2 flex flex-col">
                  <Text className="font-semibold">Phone</Text>
                  <Text>(+84) 909161871</Text>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6}>
              <div className="grid grid-cols-3">
                <Text className="col-span-1 flex justify-center items-start mr-1">
                  <GithubOutlined className="text-4xl pb-1 border-b-2 border-[#272822]" />
                </Text>
                <div className="col-span-2 flex flex-col">
                  <Text className="font-semibold">Github</Text>
                  <Text>JohanTT</Text>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={6}>
              <div className="grid grid-cols-3">
                <Text className="col-span-1 flex justify-center items-start mr-1">
                  <HomeOutlined className="text-4xl pb-1 border-b-2 border-[#272822]" />
                </Text>
                <div className="col-span-2 flex flex-col">
                  <Text className="font-semibold">Address</Text>
                  <Text>Hoc Mon district, Ho Chi Minh City, Vietnam</Text>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <Space direction="vertical" className="col-span-3 mr-8" size="large">
          <section id="AboutMe">
            <div className="flex flex-col">
              <Flex>
                <Title level={4} className="pb-2 border-b-2 border-[#272822]">
                  About
                </Title>
              </Flex>
              <Text className="text-justify">
                As a highly energetic and approachable software developer, I
                thrive in collaborative environments. I excel in quickly
                adapting to new challenges and integrating seamlessly into
                diverse teams. With a strong sense of responsibility and
                adherence to high standards, I consistently strive to deliver
                high-quality results. My enthusiasm for technology drives me to
                stay updated and continuously learn new skills. With a passion
                for my work and a commitment to teamwork, I consistently strive
                to deliver high-quality results.
              </Text>
            </div>
          </section>
          <section id="Award&Honor">
            <div className="flex items-center pl-3 relative mb-2">
              <Title level={4} className="z-10 !mb-0">
                Award & Honor
              </Title>
              <div className="absolute inset-x-0 bottom-[8px] h-2 bg-[#eed016] z-0 max-w-[10.5rem]"></div>
            </div>
            <Flex vertical>
              <AchievementTag
                icon={<BookOutlined />}
                title="HCM University Of Education - Jul 2024"
                description="Graduated with very good in Software Engineering"
              />
              <AchievementTag
                icon={<TrophyOutlined />}
                title="E-Fox Portal - Jan 2024"
                description="Project Excellence Award 2023"
              />
            </Flex>
          </section>
        </Space>
        <Space direction="vertical" className="col-span-9" size="large">
          <section id="Experience">
            <div className="flex">
              <Title
                level={4}
                className="pb-2 border-b-2 border-[#272822] border-"
              >
                Experience
              </Title>
            </div>
            <Space direction="vertical" className="ml-4" size="large">
              {/* <ExperienceDivider title="Talented Internship Experience" /> */}
              {/* Skilled Intern Stage */}
              {/* Mô tả thêm một chút về công ty, quy trình đào tạo, hỗ trợ. */}
              <ExperienceMark
                companyName="ISC Center of FPT Telecom"
                projectName="FTI Customer Request."
                courseName="Management Platform"
                courseTime="04.2024 - Present"
                role="Full-Stack Developer"
                mainResponsibilities="I'm tasked with rebuilding and improving the entire user interface while preserving the distinctive characteristics of the product, ultimately enhancing the user experience and establishing clear directory structures and component division to facilitate seamless future development. Additionally, I flexibly participated in supporting and developing project version functionalities, ensuring that all previous tasks were completed and that the project was delivered on time."
                technologies={
                  <ul className="!mb-0">
                    <li>
                      <Text>
                        <span className="font-medium">Refactor Front-end:</span>{" "}
                        React, TypeScript, Ant Design, Tailwind CSS, Redux/Redus
                        Toolkit, Plugin Eslint, Craco.
                      </Text>
                    </li>
                    <Divider className="m-[10px]" />
                    <li>
                      <Text>
                        <span className="font-medium">Database:</span> OracleDB,
                        Redis Cache.
                      </Text>
                    </li>
                    <li>
                      <Text>
                        <span className="font-medium">Back-end:</span>{" "}
                        Repository & UoW Pattern, ASP.NET Core, Quartz.net
                        Background Jobs, LinQ, Dapper, Lambda, MyBatis, C#, JWT,
                        Swagger, Kibana, Kubernetes, .Net 8 Syntax.
                      </Text>
                    </li>
                    <li>
                      <Text>
                        <span className="font-medium">Front-end:</span> MVC,
                        HTML, CSS, JavaScript, JQuery, Kendo, Bootstrap.
                      </Text>
                    </li>
                  </ul>
                }
                description="This platform serves as a flexible management system for handling user requests from various tools within the FPT system. It involves initiating, receiving, coordinating, processing, and responding to diverse customer requests. It integrates with other tools to ensure accurate and timely information updates. Furthermore, it serves as a platform for analyzing and evaluating the performance of customer requests."
              />
              <ExperienceMark
                companyName="ISC Center of FPT Telecom"
                projectName="E-Fox Portal."
                courseName="Online Training Portal"
                courseTime="06.2023 - 6.2024"
                role="Full-Stack Developer"
                mainResponsibilities="I take responsibility for key application functionalities, ranging from building APIs to creating UI components to display and populate data, always ensuring optimal performance and minimizing potential issues. I actively participate in all stages of the project development lifecycle, including analysis, design, development, testing, deployment, and maintenance. Through three version of development, I have successfully delivered assigned functionalities, customizing libraries to improve user experience, consistently meeting expectations."
                technologies={
                  <ul className="!mb-0">
                    <li>
                      <Text>
                        <span className="font-medium">Database:</span> Microsoft
                        SQL Server, Stored Procedure, Redis Cache.
                      </Text>
                    </li>
                    <li>
                      <Text>
                        <span className="font-medium">Back-end:</span>{" "}
                        Repository & UoW Pattern, Microservice Architecture, ABP
                        Framework, ASP.NET Core, Kibana, Kubernetes, Background
                        Jobs & Worker .NET, C#, LinQ, Swagger, .Net 8 Syntax.
                      </Text>
                    </li>
                    <li>
                      <Text>
                        <span className="font-medium">Front-end:</span> Angular,
                        TypeScript, HTML, CSS, Bootstrap.
                      </Text>
                    </li>
                  </ul>
                }
                description="An online training portal designed for internal employees of FPT system, providing a wide range of courses, study schedules, quizzes, exams, assignments, study materials, and other relevant information. Additionally, it includes a management system for Head of Training to oversee students, instructors, and classes."
              ></ExperienceMark>
              {/* Internship Stage */}
              {/* <ExperienceDivider title="Internship Experience" /> */}
              <ExperienceMark
                companyName="Startup Company"
                projectName="MAAR."
                courseName="Social Application"
                courseTime="02.2023 - 06.2023"
                role="Back-end Developer"
                mainResponsibilities="As a backend developer in a startup company, my main responsibilities include adapting to new integrated programming environments and the Java language. Additionally, I familiarize myself with coding practices and workflows. I actively participate in team meetings to brainstorm ideas for our first product. Furthermore, I develop functionalities/APIs for the application, such as notifications, file uploads, and user profile updates."
                technologies={
                  <ul className="!mb-0">
                    <li>
                      <Text>
                        <span className="font-medium">Database:</span> MongoDB
                        Atlas, Spring Data JPA.
                      </Text>
                    </li>
                    <li>
                      <Text>
                        <span className="font-medium">Back-end:</span> Spring
                        Boots Framework, Apache Maven, Eclipse IDE, Firebase
                        Cloud Messaging, Spring Multipart File, Java.
                      </Text>
                    </li>
                  </ul>
                }
                description="An social networking application aimed at assisting individuals in finding like-minded companions in various fields such as education (e.g., English language learning) and E-sports through predictive algorithms and surveys. Subsequently, users will be suggested/searched for groups that they feel are suitable for them."
              ></ExperienceMark>
              {/* Outstanding Course Projects */}
              {/* <ExperienceDivider title="Outstanding Course Projects" /> */}
              {/* <ExperienceMark
                companyName="Collegiate"
                projectName="Mercedes ECommerce Center."
                courseName="Ecommerce"
                courseTime="07.2023 - 08.2023"
                role="Team Lead & Full-Stack Developer"
                mainResponsibilities="In the project, I am responsible for analyzing and planning product development, as well as building and managing source code. I integrate packages to create a convenient programming environment for team members. I provide guidance and introduce new technologies, while also developing complex authorization methods and APIs. Additionally, I handle hosting the website on Azure, including the database, APIs, and user interface.
            Furthermore, I delegate tasks to team members and ensure project deadlines are met. Finally, I am accountable for reporting on the product and ensuring that the final product meets the set goals and quality criteria."
                technologies={
                  <ul className="!mb-0">
                    <li>
                      <Text>Database: Microsoft SQL Server, Redis Cache.</Text>
                    </li>
                    <li>
                      <Text>
                        Back-end: Repository & UoW Pattern, Microservice
                        Architecture, DBContext, Entity Framework, ASP.NET Core,
                        C#, LinQ, JWT, Azure web hosting.
                      </Text>
                    </li>
                    <li>
                      <Text>
                        Front-end: React, TypeScript, Tailwind CSS, AntDesign.
                      </Text>
                    </li>
                  </ul>
                }
                description="This is a large project with numerous requirements that need to be fulfilled for it to function as a full-fledged e-commerce website, including buying, payment processing, invoicing, etc. It also involves implementing the latest technologies and self-hosting the website on a platform."
              /> */}
              {/* <ExperienceMark
            companyName="CodeFest"
            projectName="RPG-Game."
            courseName="Game UIT Hackathon 2022"
            courseTime="26.11.2022 - 27.11.2022"
            role="Team Lead & Function Developer"
            mainResponsibilities="As this was a hackathon competition, I took responsibility for brainstorming ideas with team members. I searched for a suitable environment for everyone to quickly adapt to. I designed and developed the product, focusing on key game features including character management, puzzle-solving systems, and mission systems. I supported other team members throughout the product development process. Finally, I was responsible for reporting on the product, participating in activities set by the organizers, and ensuring that the set goals and quality criteria were met."
            technologies="Constructor 2"
            description="Build a puzzle-solving RPG game, simulating a world severely polluted after the post-apocalyptic era. Players find a new tiny hope from a blade of grass. Their mission is not only to protect it from external dangers but also to nurture it to sustain life."
          />
          <ExperienceMark
            companyName="Collage"
            projectName="E-Learning Website."
            courseName="Web Programming"
            courseTime="02.2022 - 05.2022"
            role="Team Lead & Full-Stack Developer"
            mainResponsibilities="In the project, I am responsible for building and managing source code, as well as integrating software packages to create a development environment for other team members. I take on the role of brainstorming and implementing complex functionalities, while supporting teammates in the development process. I also manage tasks and allocate assignments to team members, ensuring that project milestones are met on time. Finally, I am responsible for reporting on the product and ensuring that the final outcome of the project meets the set goals and quality criteria."
            technologies="HTML, CSS, JavaScript, PHP, Xampp, Laravel framework"
            description="An E-Learning website with multiple course, variety of instructors and participants."
          /> */}
            </Space>
          </section>
          <section id="Skills">
            <div className="flex">
              <Title
                level={4}
                className="pb-2 border-b-2 border-[#272822] border-"
              >
                Skills
              </Title>
              {/* Use Github for teamwork
                Planning for work
                Good in teamwork. Team Lead & Full-Stack Developer of all subjects
                Keen attention to detail
                Strong problem solver
                Critical thinking
                English communication well 
                */}
              {/* Career Objective 
                Internship for company
                Look for opportunities to dedication long-term at the company
                Apply knowledge for work
                Get a high position in the company
                */}
            </div>
            <SkillsBox
              mainSkills={[
                "User Interface",
                "User Experience",
                "Object Oriented",
                "Design Methods",
                "Patterns",
                "Development Tools",
                "Code Review",
                "Debugging Methods",
              ]}
              solfSkills={[
                "Self-Learning",
                "Second Brain",
                "Problem solving",
                "Presentation",
                "Second Language",
              ]}
            />
          </section>
          <section id="Education">
            <div className="flex">
              <Title
                level={4}
                className="pb-2 border-b-2 border-[#272822] border-"
              >
                Education
              </Title>
            </div>
            <Space direction="horizontal" className="mb-3">
              <EducationBox
                courseName="Ecommerce Collegiate"
                projectName="Mercedes ECommerce Center"
                courseTime="07.2023 - 08.2023"
              />
              <EducationBox
                courseName="Game UIT Hackathon 2022 CodeFest"
                projectName="RPG-Game (New Hope)"
                courseTime="26.11.2022 - 27.11.2022"
              />
              <EducationBox
                courseName="Web Programming Collegiate"
                projectName="E-Learning Website"
                courseTime="02.2022 - 05.2022"
              />
            </Space>
            <Space direction="horizontal">
              <EducationBox
                courseName="HCM University Of Education"
                projectName="Information Technology - Major: Software Engineering"
                courseTime="2020 - 2024 - Ho Chi Minh City, VietNam"
              />
            </Space>
          </section>
        </Space>
      </div>
    </main>
  );
}

export default App;
