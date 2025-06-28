import { Col, Flex, Row, Typography } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function Contacts() {
  return (
    <section id="Contact" className="col-span-9">
      <div className="py-4">
        <div className="border-b-2 border-[#272822]"></div>
      </div>
      <Flex justify={"space-between"} className="p-0 gap-2">
        <Flex className="gap-2 p-0">
          <Typography.Text className="flex justify-center items-start">
            <LinkedinOutlined className="text-4xl pb-1 border-b-2 border-[#272822]" />
          </Typography.Text>
          <div className="col-span-2 flex flex-col">
            <Typography.Text className="font-semibold">
              Linkedin
            </Typography.Text>
            <span
              className="text-black p-0 m-0 cursor-pointer hover:underline"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/thắng-cao-việt-029594279",
                  "_blank"
                );
              }}
            >
              Thắng Cao Việt
            </span>
          </div>
        </Flex>
        <Flex className="gap-2 p-0">
          <Typography.Text className="flex justify-center items-start">
            <MailOutlined className="text-4xl pb-1 border-b-2 border-[#272822]" />
          </Typography.Text>
          <div className="col-span-2 flex flex-col">
            <Typography.Text className="font-semibold">Email</Typography.Text>
            <Typography.Text>thejohan39@gmail.com</Typography.Text>
          </div>
        </Flex>
        <Flex className="gap-2 p-0">
          <Typography.Text className="flex justify-center items-start">
            <PhoneOutlined className="text-4xl pb-1 border-b-2 border-[#272822]" />
          </Typography.Text>
          <div className="col-span-2 flex flex-col">
            <Typography.Text className="font-semibold">Phone</Typography.Text>
            <Typography.Text>(+84) 909161871</Typography.Text>
          </div>
        </Flex>
        <Flex className="gap-2 p-0">
          <Typography.Text className="flex justify-center items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-11 pb-1 border-b-2 border-[#272822] h-[2.63rem]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
              />
            </svg>
          </Typography.Text>
          <div className="col-span-2 flex flex-col">
            <Typography.Text className="font-semibold">
              Birthday
            </Typography.Text>
            <Typography.Text>05/09/2002</Typography.Text>
          </div>
        </Flex>
      </Flex>
    </section>
  );
}
