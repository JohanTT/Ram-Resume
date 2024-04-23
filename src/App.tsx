import "./App.css";
import { Avatar, Col, Flex, Row, Tag, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { TrophyOutlined } from "@ant-design/icons";
import ExperienceDivider from "./component/experience-divider.component";
import ExperienceMark from "./component/experience-mark.component";

const { Title, Text } = Typography;

function App() {
  return (
    <main className="bg-[#f0f0e8] px-20 py-10 tracking-wide">
      <section id="MyName" className="pt-10 mx-16">
        <div className="bg-[#efd318] w-[120px] h-[120px] rounded-full absolute z-0 top-12"></div>
        <div className="relative ml-7">
          <Title className="!m-0 !font-bold z-10">Cao Viet Thang</Title>
        </div>
      </section>
      <div className="grid grid-cols-12 gap-y-5 mx-16">
        <div className="col-span-3 relative ml-7">
          <Title level={4} className="!m-0 z-10 !font-[350]">
            Junior FullStack Developer
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
                  <Text>0909161871</Text>
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
                  <LinkedinOutlined className="text-4xl pb-1 border-b-2 border-[#272822]" />
                </Text>
                <div className="col-span-2 flex flex-col">
                  <Text className="font-semibold">LinkedIn</Text>
                  <Text>ThangCV9</Text>
                </div>
              </div>
            </Col>
          </Row>
        </section>
        <section id="Qualifications" className="col-span-3">
          <Flex>
            <Title level={4} className="pb-2 border-b-2 border-[#272822]">
              Qualifications
            </Title>
          </Flex>
          <Flex vertical>
            <Text>Major: Information Technology (SoftWare Engineering)</Text>
            <Text>GPA: 3.4</Text>
            <Text>At: HCMC University of Education</Text>
            <Text>Year of Experience: 1+</Text>
          </Flex>
        </section>
        <section id="AboutMe" className="col-span-9">
          <div className="grid grid-cols-9">
            <div className="col-span-2 flex items-center pl-3 relative mb-2">
              <Title level={4} className="z-10">
                Profile
              </Title>
              <div className="absolute inset-x-0 bottom-[18px] h-2 bg-[#eed016] z-0 mr-5"></div>
            </div>
            <div className="col-span-7"></div>
            <div className="col-span-2 items-center justify-center flex">
              <Avatar size={90} icon={<UserOutlined />} />
            </div>
            <Text className="col-span-7 text-justify">
              I am energetic, with excellent capacity to adapt to new
              challenges. As an active learner and strong team player I’m able
              to work in any diverse & fast-paced environment and also take full
              responsibility for my own personal development. At the moment I am
              a 2nd year student far from what I once was but not yet what I'm
              going to be
            </Text>
          </div>
        </section>
        <section id="Skills" className="col-span-3">
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
        </section>
        <section id="Experience" className="col-span-9">
          <div className="flex">
            <Title
              level={4}
              className="pb-2 border-b-2 border-[#272822] border-"
            >
              Work Experience
            </Title>
          </div>
          {/* Skilled Intern Stage */}
          <ExperienceDivider title="Talented Internship Experience" />
          {/* Mô tả thêm một chút về công ty, quy trình đào tạo, hỗ trợ. */}
          <ExperienceMark
            companyName="ISC Center of FPT Telecom"
            projectName="FTI Customer Request."
            courseName="Management Platform"
            courseTime="04.2024 - Present"
            role="Full-Stack Developer"
            mainResponsibilities="This initiative involves enhancing future versions of the project. My main responsibility is to understand the existing source code and devise optimal methods for migrating from the MVC model to a React application. I am tasked with rebuilding and improving the entire user interface while preserving the distinctive characteristics of the product, ultimately enhancing the user experience. Additionally, I am responsible for establishing clear directory structures and component division to facilitate seamless future development."
            technologies={
              <ul className="!mb-0">
                <li>
                  <Text>
                    Front-end: React, TypeScript, Ant Design, Tailwind CSS,
                    Redux/Redus Toolkit, Plugin Eslint, Craco.
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
            courseTime="06.2023 - Present"
            role="Full-Stack Developer"
            mainResponsibilities="As a full-stack developer in a large company, my primary responsibilities involve working on a truly extensive project that has undergone several development iterations. Firstly, I immerse myself in understanding the source code, grasping the project's processes, and comprehending its business rules thoroughly. I Take responsibility for key application functionalities, ranging from building APIs to creating UI components to display and populate data, always ensuring optimal performance and minimizing potential issues. I actively participate in all stages of the project development lifecycle, including analysis, design, development, testing, deployment, and maintenance. Through three version of development, I have been entrusted with and successfully delivered assigned functionalities, consistently meeting expectations."
            technologies={
              <ul className="!mb-0">
                <li>
                  <Text>
                    Database: Microsoft SQL Server, Stored Procedure, Redis
                    Cache.
                  </Text>
                </li>
                <li>
                  <Text>
                    Back-end: Repository & UoW Pattern, Microservice
                    Architecture, ABP Framework, ASP.NET Core, Background Jobs &
                    Worker .NET, C#, LinQ.
                  </Text>
                </li>
                <li>
                  <Text>
                    Front-end: Angular, TypeScript, HTML, CSS, Bootstrap.
                  </Text>
                </li>
              </ul>
            }
            description="An online training portal designed for internal employees of FPT system, providing a wide range of courses, study schedules, quizzes, exams, assignments, study materials, and other relevant information. Additionally, it includes a management system for Head of Training to oversee students, instructors, and classes."
          >
            <Text>
              <Tag
                color="#6C0345"
                bordered={false}
                className="font-medium mr-1 text-[13px]"
              >
                <TrophyOutlined /> Achievement:
              </Tag>
              Project Excellence Award 2023.
            </Text>
          </ExperienceMark>
          {/* Internship Stage */}
          <ExperienceDivider title="Internship Experience" />
          <ExperienceMark
            companyName="A Startup Company"
            projectName="MAAR."
            courseName="Social Application"
            courseTime="02.2023 - 06.2023"
            role="Back-end Developer"
            mainResponsibilities="As a backend developer in a startup company, my main responsibilities include adapting to new integrated programming environments and the Java language. Additionally, I familiarize myself with coding practices and workflows. I actively participate in team meetings to brainstorm ideas for our first product. Furthermore, I develop functionalities/APIs for the application, such as notifications, file uploads, and user profile updates."
            technologies={
              <ul className="!mb-0">
                <li>
                  <Text>Database: MongoDB Atlas, Spring Data JPA.</Text>
                </li>
                <li>
                  <Text>
                    Back-end: Spring Boots Framework, Apache Maven, Eclipse IDE,
                    Firebase Cloud Messaging, Spring Multipart File, Java.
                  </Text>
                </li>
              </ul>
            }
            description="An social networking application aimed at assisting individuals in finding like-minded companions in various fields such as education (e.g., English language learning) and E-sports through predictive algorithms and surveys. Subsequently, users will be suggested/searched for groups that they feel are suitable for them."
          ></ExperienceMark>
          {/* Outstanding Course Projects */}
          <ExperienceDivider title="Outstanding Course Projects" />
          <ExperienceMark
            companyName="Collage"
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
                    Architecture, DBContext, Entity Framework, ASP.NET Core, C#,
                    LinQ, JWT, Azure web hosting.
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
          />
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
        </section>
      </div>
    </main>
  );
}

export default App;
