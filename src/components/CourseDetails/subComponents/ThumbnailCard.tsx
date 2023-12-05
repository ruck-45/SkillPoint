// Dependencies
import { FaGraduationCap } from "react-icons/fa";
import { Chip } from "@nextui-org/react";

type ThumbnailCardProps = {
  thumbnail: string;
  instructor: string;
  name: string;
  enrollmentStatus: string;
};

const ThumbnailCard = (props: ThumbnailCardProps) => {
  return (
    <div
      className="h-[30rem] rounded-3xl bg-no-repeat bg-cover bg-center flex flex-col p-[3rem] justify-between"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 20%,rgba(0,0,0,0.5)), url(${props.thumbnail})`,
      }}
    >
      <div>
        <div className="flex text-white gap-[0.3rem]">
          <FaGraduationCap className="text-xl" />
          <span>{props.instructor}</span>
        </div>
        <h1 className="font-lilita text-white text-4xl max-w-[30rem]">{props.name}</h1>
      </div>
      <Chip
        className="text-white dark"
        color={
          props.enrollmentStatus === "Open" ? "success" : props.enrollmentStatus === "Closing" ? "warning" : "danger"
        }
      >
        Enrollment : {props.enrollmentStatus}
      </Chip>
    </div>
  );
};

export default ThumbnailCard;
