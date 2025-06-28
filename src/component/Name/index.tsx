import { Typography } from "antd";
import Contacts from "../Contacts";

export default function MyName() {
  return (
    <section id="MyName" className="pt-10 pb-6 mx-16">
      <div className="relative ml-7 flex">
        <Typography.Title className="!m-0 !font-bold z-10 tracking-wide">
          Cao Viet Thang
        </Typography.Title>
      </div>
      <div className="bg-[#efd318] w-[160px] h-[160px] rounded-full absolute z-0 top-[40px]"></div>
      <div className="grid grid-cols-12 gap-y-5">
        <div className="col-span-3 relative ml-7">
          <Typography.Title
            level={4}
            className="!m-0 z-10 !font-[350] tracking-wide"
          >
            Full-Stack Developer
          </Typography.Title>
        </div>
        <Contacts />
      </div>
    </section>
  );
}
