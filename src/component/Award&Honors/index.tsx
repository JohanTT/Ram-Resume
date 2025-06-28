import { Flex, Typography } from "antd";
import AchievementTag from "./components/AchievementTag";
import dayjs from "dayjs";

export default function AwardHonors() {
  const items = [
    {
      type: "commendation",
      project: "FCR",
      title: "Outstanding Project Delivery",
      time: dayjs("06/01/2025"),
    },
    {
      type: "commendation",
      project: "FCR",
      title: "Hotshot Employee of Quarter 1",
      time: dayjs("03/01/2025"),
    },
    {
      type: "commendation",
      project: "FCR",
      title: "Best Recovery Project of 2024",
      time: dayjs("01/01/2025"),
    },
    {
      type: "project",
      project: "E-Fox",
      title: "Excellence Project award 2023",
      time: dayjs("01/01/2024"),
    },
    {
      type: "honor",
      project: "Very good with 3.4 GPA",
      title: "Information Technology at HCM University Of Education",
      time: dayjs("07/01/2024"),
    }
  ];

  return (
    <section id="Honor&Recognition" className="col-span-3">
      <div className="flex items-center pl-3 relative mb-2">
        <Typography.Title level={4} className="z-10 !mb-0">
          Honor & Recognition
        </Typography.Title>
        <div className="absolute inset-x-0 bottom-[8px] h-2 bg-[#eed016] z-0 max-w-[13.3rem]"></div>
      </div>
      <Flex gap={12} wrap="wrap" className="w-full">
        {items.map((item, index) => (
          <AchievementTag
            key={index}
            type={item.type as "project" | "commendation" | "honor"}
            time={item.time}
            project={item.project}
            title={item.title}
          />
        ))}
      </Flex>
    </section>
  );
}
