// Dependencies
import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import { FaGraduationCap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type CourseCardProps = {
  className?: string;
  id: number;
  name: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  enrollmentStatus: string;
};

const CourseCard = (props: CourseCardProps) => {
  const className = "dark bg-[#28292b]" + props.className;
  const navigate = useNavigate();

  const showDetails = () => {
    navigate(`../CourseDetails`, { state: { ...props } });
  };

  return (
    <Card shadow="sm" isPressable className={className} onClick={showDetails}>
      <CardBody className="overflow-visible p-5 pb-3 items-center">
        <div
          className="relative w-[100%] pb-[75%] overflow-hidden"
          style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}
        >
          <img
            src={props.thumbnail}
            className="rounded-xl absolute top-[0] left-[0] object-cover h-[100%] w-[100%]"
            alt=""
            style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}
          />
        </div>
      </CardBody>
      <CardFooter className="text-small justify-between flex-col pt-0 gap-[0.5rem]">
        <b className="w-[12rem]">{props.name}</b>
        <div className="flex text-default-500 gap-[0.3rem]">
          <FaGraduationCap className="text-xl" />
          <span className="max-w-[10rem]">{props.instructor}</span>
        </div>
        <div className="flex justify-between w-[80%]">
          <Chip variant="flat">{props.duration}</Chip>
          <Chip
            color={
              props.enrollmentStatus === "Open"
                ? "success"
                : props.enrollmentStatus === "Closing"
                ? "warning"
                : "danger"
            }
            variant="flat"
          >
            {props.enrollmentStatus}
          </Chip>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
