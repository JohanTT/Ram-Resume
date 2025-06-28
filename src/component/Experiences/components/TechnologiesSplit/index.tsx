import { Typography } from "antd";

export default function TechnologiesSplit() {
  return (
    <ul className="!mb-0">
      <li>
        <Typography.Text>
          <span className="font-medium">Database:</span> Microsoft SQL Server,
          Stored Procedure, Redis Cache.
        </Typography.Text>
      </li>
      <li>
        <Typography.Text>
          <span className="font-medium">Back-end:</span> Repository & UoW
          Pattern, Microservice Architecture, ABP Framework, ASP.NET Core,
          Kibana, Kubernetes, Background Jobs & Worker .NET, C#, LinQ, Swagger,
          .Net 8 Syntax.
        </Typography.Text>
      </li>
      <li>
        <Typography.Text>
          <span className="font-medium">Front-end:</span> Angular, TypeScript,
          HTML, CSS, Bootstrap.
        </Typography.Text>
      </li>
    </ul>
  );
}
