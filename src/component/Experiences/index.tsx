import { Space, Typography } from "antd";
import ExperienceMark, {
  ExperienceMarkProps,
} from "./components/ExperienceMask";

export default function Experiences() {
  const experiencesData: ExperienceMarkProps[] = [
    {
      companyName: "FPT Telecom",
      projectName: "FTI Customer Request.",
      courseName: "Customer Request Management",
      courseTime: "06.2024 - Present",
      mainResponsibilities:
        "Led the rebuild of a post-sales customer request management system. Took full ownership of migrating the legacy MVC platform to React TypeScript with a scalable, maintainable architecture. Collaborated across teams to streamline contract workflows and service integration. Redesigned UI with Material Design to improve usability and preserve business rules.",
      technologies: {
        fe: [
          "React",
          "TypeScript",
          "Redux Toolkit",
          "Ant Design",
          "Tailwind CSS",
          "MVC",
          "Kendo UI",
        ],
        be: ["ASP.NET Core", "C#", "Dapper", "Entity Framework Core", "JWT", "Quartz.NET"],
        db: ["OracleDB", "Redis Cache", "MongoDB"],
        other: ["Kubernetes", "Kibana"],
      },
      subDomains: [
        {
          name: "Legacy System Migration",
          description: "Led full migration from MVC to React TypeScript.",
        },
        {
          name: "Codebase Refactoring",
          description: "Reorganized code structure for maintainability.",
        },
        {
          name: "Component Modularization",
          description: "Separated features into reusable components.",
        },
        {
          name: "Contract and Subcontract Integration",
          description: "Integrated contract flows into request processes.",
        },
        {
          name: "Service Flow Optimization",
          description: "Improved logic for service-specific workflows.",
        },
        {
          name: "Workflow Step Tracking",
          description: "Implemented step-by-step request tracking.",
        },
        {
          name: "Request Creation & Editing",
          description: "Enabled full CRUD for service requests.",
        },
        {
          name: "FTI-wide UI Consistency",
          description: "Unified interface across all FTI applications.",
        },
        {
          name: "Request Dashboard Visualization",
          description: "Built dashboards for tracking request statuses.",
        },
      ],
    },
    {
      companyName: "FPT Telecom",
      projectName: "FTI Management System.",
      courseName: "CRM & Customer Operations",
      courseTime: "04.2024 - 05.2024",
      mainResponsibilities:
        "Temporarily assigned to boost development of the FTI user and organization management system. Focused on building key features such as organizational charts, department hierarchies, and user profile modules. Contributed to UI performance enhancements and data visualization improvements. Involved exclusively in the development phase.",
      technologies: {
        fe: ["React", "TypeScript", "Redux Toolkit", "Ant Design", "Tailwind CSS"],
        be: ["ASP.NET Core", "C#", "Dapper", "Entity Framework Core"],
        db: ["OracleDB", "Redis Cache"],
      },
      subDomains: [
        {
          name: "Organizational Structure Management",
          description:
            "Manage and implement CRUD regions, divisions, departments, positions, employees.",
        },
        {
          name: "Organizational Chart",
          description: "Visualize department and employee hierarchy as tree.",
        },
        {
          name: "User Profile Management",
          description: "Display user info: name, email, position, department.",
        },
      ],
    },
    {
      companyName: "FPT Telecom",
      projectName: "E-Fox.",
      courseName: "Education Platform & LMS",
      courseTime: "06.2023 - 05.2024",
      mainResponsibilities:
        "Collaborated with BA, QA, and UI/UX teams to clarify specifications and deliver core features of the education platform. Built and optimized modules such as Instructor Management, Student Schedule Viewer, Learning Dashboards, and Class Configuration.",
      technologies: {
        fe: ["Angular", "TypeScript", "Bootstrap"],
        be: [
          "ASP.NET Core",
          "ABP Framework",
          "C#",
          "Microservice Architecture",
          "Background Workers",
        ],
        db: ["SQL Server", "Stored Procedures", "Redis Cache"],
        other: ["Kibana", "Kubernetes"],
      },
      subDomains: [
        {
          name: "Instructor Schedule Overview",
          description: "View teaching schedules and class assignments.",
        },
        {
          name: "Instructor Profile Management",
          description: "Manage instructor info, ratings, and course data.",
        },
        {
          name: "Instructor Reports & Metrics",
          description: "Track teaching hours and export evaluation reports.",
        },
        {
          name: "Student Schedule Viewer",
          description: "Display class schedules by date and time.",
        },
        {
          name: "Course Tree View",
          description: "Show enrolled courses in a tree structure.",
        },
        {
          name: "Learning Progress Dashboard",
          description: "Summarize study hours and class stats.",
        },
        {
          name: "Child Class Configuration",
          description:
            "Configure class formats (Online, Offline, Hybrid) and others child class info.",
        },
        {
          name: "Child Class Session Control",
          description: "Edit/view/delete based on session status.",
        },
      ],
    },
    {
      companyName: "Startup Company",
      projectName: "MAAR.",
      courseName: "Social Networking",
      courseTime: "02.2023 - 06.2023",
      mainResponsibilities:
        "Contributed as a backend developer in building core features for MAAR’s user-facing system. Focused on implementing APIs for user registration, profile updates, file uploads, and real-time notifications. Participated in planning discussions and collaborated with team members to deliver the first product release.",
      technologies: {
        be: ["Java", "Spring Boot"],
        db: ["MongoDB"],
      },
      subDomains: [
        {
          name: "User Profile Management",
          description: "Enabled profile viewing and editing.",
        },
        {
          name: "Media Upload",
          description: "Developed image upload.",
        },
        {
          name: "User Notifications",
          description: "Built system for event and group alerts.",
        },
      ],
    },
  ];

  return (
    <section id="Experience">
      <div className="flex">
        <Typography.Title
          level={4}
          className="pb-2 border-b-2 border-[#272822] border-"
        >
          Experience
        </Typography.Title>
      </div>
      <Space direction="vertical" className="ml-4" size="large">
        {experiencesData.map((experience, index) => (
          <ExperienceMark
            key={index}
            companyName={experience.companyName}
            projectName={experience.projectName}
            courseName={experience.courseName}
            courseTime={experience.courseTime}
            mainResponsibilities={experience.mainResponsibilities}
            technologies={experience.technologies}
            subDomains={experience.subDomains}
          />
        ))}
        {/* <ExperienceDivider title="Talented Internship Experience" /> */}
        {/* <ExperienceMark
          companyName="FPT Telecom"
          projectName="FTI Customer Request."
          courseName="Management Platform"
          courseTime="04.2024 - Present"
          role="Full-Stack Developer"
          mainResponsibilities="I'm tasked with rebuilding and improving the entire user interface while preserving the distinctive characteristics of the product, ultimately enhancing the user experience and establishing clear directory structures and component division to facilitate seamless future development. Additionally, I flexibly participated in supporting and developing project version functionalities, ensuring that all previous tasks were completed and that the project was delivered on time."
          technologies={
            <ul className="!mb-0">
              <li>
                <Typography.Text>
                  <span className="font-medium">Refactor Front-end:</span>{" "}
                  React, TypeScript, Ant Design, Tailwind CSS, Redux/Redus
                  Toolkit, Plugin Eslint, Craco.
                </Typography.Text>
              </li>
              <Divider className="m-[10px]" />
              <li>
                <Typography.Text>
                  <span className="font-medium">Database:</span> OracleDB, Redis
                  Cache.
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  <span className="font-medium">Back-end:</span> Repository &
                  UoW Pattern, ASP.NET Core, Quartz.net Background Jobs, LinQ,
                  Dapper, Lambda, MyBatis, C#, JWT, Swagger, Kibana, Kubernetes,
                  .Net 8 Syntax.
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  <span className="font-medium">Front-end:</span> MVC, HTML,
                  CSS, JavaScript, JQuery, Kendo, Bootstrap.
                </Typography.Text>
              </li>
            </ul>
          }
          description="This platform serves as a flexible management system for handling user requests from various tools within the FPT system. It involves initiating, receiving, coordinating, processing, and responding to diverse customer requests. It integrates with other tools to ensure accurate and timely information updates. Furthermore, it serves as a platform for analyzing and evaluating the performance of customer requests."
        />
        <ExperienceMark
          companyName="FPT Telecom"
          projectName="E-Fox Portal."
          courseName="Online Training Portal"
          courseTime="06.2023 - 6.2024"
          role="Full-Stack Developer"
          mainResponsibilities="I take responsibility for key application functionalities, ranging from building APIs to creating UI components to display and populate data, always ensuring optimal performance and minimizing potential issues. I actively participate in all stages of the project development lifecycle, including analysis, design, development, testing, deployment, and maintenance. Through three version of development, I have successfully delivered assigned functionalities, customizing libraries to improve user experience, consistently meeting expectations."
          technologies={
          }
          description="An online training portal designed for internal employees of FPT system, providing a wide range of courses, study schedules, quizzes, exams, assignments, study materials, and other relevant information. Additionally, it includes a management system for Head of Training to oversee students, instructors, and classes."
        /> */}
        {/* <ExperienceDivider title="Internship Experience" /> */}
        {/* <ExperienceMark
          companyName="Startup Company"
          projectName="MAAR."
          courseName="Social Application"
          courseTime="02.2023 - 06.2023"
          role="Back-end Developer"
          mainResponsibilities="As a backend developer in a startup company, my main responsibilities include adapting to new integrated programming environments and the Java language. Additionally, I familiarize myself with coding practices and workflows. I actively participate in team meetings to brainstorm ideas for our first product. Furthermore, I develop functionalities/APIs for the application, such as notifications, file uploads, and user profile updates."
          technologies={
            <ul className="!mb-0">
              <li>
                <Typography.Text>
                  <span className="font-medium">Database:</span> MongoDB Atlas,
                  Spring Data JPA.
                </Typography.Text>
              </li>
              <li>
                <Typography.Text>
                  <span className="font-medium">Back-end:</span> Spring Boots
                  Framework, Apache Maven, Eclipse IDE, Firebase Cloud
                  Messaging, Spring Multipart File, Java.
                </Typography.Text>
              </li>
            </ul>
          }
          description="An social networking application aimed at assisting individuals in finding like-minded companions in various fields such as education (e.g., English language learning) and E-sports through predictive algorithms and surveys. Subsequently, users will be suggested/searched for groups that they feel are suitable for them."
        /> */}
      </Space>
    </section>
  );
}
