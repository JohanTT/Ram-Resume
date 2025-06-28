import { Typography } from "antd";

interface ExperienceDividerProps {
  title?: string;
}

export default function ExperienceDivider(props: ExperienceDividerProps) {
  return (
    <div className="relative">
      <div className="grid grid-cols-9">
        <div className="col-span-2 py-4">
          <div className="border-b-2 border-[#272822] "></div>
        </div>
        <div className="col-span-7 py-4 relative">
          <div className="border-b-2 border-[#efd318]"></div>
          <div className="absolute top-0 left-0 right-0 bottom-0 text-center">
            <Typography.Text className="z-10 font-semibold text-lg absolute bottom-[5px]">
              {props?.title}
            </Typography.Text>
          </div>
        </div>
      </div>
    </div>
  );
}
