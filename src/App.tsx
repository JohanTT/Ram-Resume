import "./App.css";
import { Col, Row, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

function App() {
  return (
    <main className="bg-[#f0f0e8] px-14 py-10">
      <section id="MyName" className="pt-10">
        <div
          content=""
          className="bg-[#efd318] w-[120px] h-[120px] rounded-full absolute z-0 top-12"
        ></div>
        <div className="relative z-1 ml-7">
          <Title className="!m-0">Cao Viet Thang</Title>
        </div>
      </section>
      <section id="MyInfo" className="grid grid-cols-12 grid-rows-12 gap-y-5">
        <div className="col-span-4 relative z-1 ml-7">
          <Title level={4} className="!m-0 !font-[350]">
            Junior FullStack Developer
          </Title>
        </div>
        <div className="col-span-8 row-span-1">
          <Col className="py-4">
            <div className="border-t border-[#272822]"></div>
          </Col>
          <section id="Contact">
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12} lg={6}>
                <div className="grid grid-cols-3">
                  <Text className="col-span-1">
                    <MailOutlined />
                    <PhoneOutlined />
                    <GithubOutlined />
                    <LinkedinOutlined />
                    <HomeOutlined />
                  </Text>
                  <div className="col-span-2 flex flex-col">
                    <Text>Email</Text>
                    <Text>Email</Text>
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6}>
                <Text>Phone</Text>
                <Text>Phone</Text>
                <Text>Phone</Text>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6}>
                <Text>Address</Text>
                <Text>Address</Text>
                <Text>Address</Text>
              </Col>
              <Col xs={24} sm={24} md={12} lg={6}>
                <Text>Github</Text>
                <Text>Github</Text>
                <Text>Github</Text>
              </Col>
            </Row>
          </section>
        </div>

        <div className="col-span-4 row-span-1">
          <section id="Contact">Contact</section>
        </div>

        <div className="col-span-8 row-span-1">
          <section id="AboutMe">AboutMe</section>
        </div>

        <div className="col-span-4 row-span-1">
          <section id="Skills">Skills</section>
          <section id="Education">Education</section>
        </div>
        <div className="col-span-8 row-span-1">
          <section id="Experience">Experience</section>
          <section id="Projects">Projects</section>
        </div>
      </section>
    </main>
  );
}

export default App;
