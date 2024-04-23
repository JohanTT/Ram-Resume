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
            <Typography.Title level={4} className="z-10">
              {props?.title}
            </Typography.Title>
            {/* Nội dung của bạn sẽ được hiển thị ở đây */}
          </div>
        </div>
      </div>
    </div>
  );
}
