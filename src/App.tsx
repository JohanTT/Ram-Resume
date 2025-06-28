import "./App.css";
import { Space } from "antd";
import AboutMe from "./component/AboutMe";
import AwardHonors from "./component/Award&Honors";
import Experiences from "./component/Experiences";
import Skills from "./component/Skills";
import Educations from "./component/Educations";
import MyName from "./component/Name";

function App() {
  return (
    <main className="max-w-[1200px] mx-auto">
      <MyName />
      <Space direction="vertical" size="large" className="mx-16">
        <div className="flex flex-col gap-4">
          <AboutMe />
          <AwardHonors />
        </div>
        <Experiences />
        <Skills />
        <Educations />
      </Space>
    </main>
  );
}

export default App;
