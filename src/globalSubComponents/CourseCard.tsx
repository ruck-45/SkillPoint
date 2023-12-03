// Dependencies
import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import { FaGraduationCap } from "react-icons/fa";

type CourseCardProps = {
  className?: string;
};

const CourseCard = (props: CourseCardProps) => {
  const className = "dark bg-[#28292b] " + props.className;
  return (
    <Card shadow="sm" isPressable className={className}>
      <CardBody className="overflow-visible p-5 pb-3 items-center">
        <div
          className="relative w-[100%] pb-[75%] overflow-hidden"
          style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}
        >
          <img
            src="https://coderpad.io/wp-content/uploads/2022/09/coderpad-blogpost-python-red-1.png"
            className="rounded-xl absolute top-[0] left-[0] object-cover h-[100%] w-[100%]"
            alt=""
            style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}
          />
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between flex-col pt-0 gap-[0.5rem]">
        <b className="max-w-[12rem]">Python Programming Basics</b>
        <div className="flex text-default-500 gap-[0.3rem]">
          <FaGraduationCap className="text-xl" />
          <span className="max-w-[10rem]">Jonnathan nolan</span>
        </div>
        <div className="flex justify-between w-[80%]">
          <Chip variant="flat">6 Weeks</Chip>
          <Chip color="success" variant="flat">Open</Chip>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
