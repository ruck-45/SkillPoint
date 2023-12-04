// Dependencies
import { FaGraduationCap } from "react-icons/fa";
import { Chip } from "@nextui-org/react";

const ThumbnailCard = () => {
  return (
    <div
      className="h-[30rem] rounded-3xl bg-no-repeat bg-cover bg-center flex flex-col p-[3rem] justify-between"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 20%,rgba(0,0,0,0.5)), url(https://coderpad.io/wp-content/uploads/2022/09/coderpad-blogpost-python-red-1.png)`,
      }}
    >
      <div>
        <div className="flex text-white gap-[0.3rem]">
          <FaGraduationCap className="text-xl" />
          <span>Jonnathan nolan</span>
        </div>
        <h1 className="font-lilita text-white text-4xl max-w-[30rem]">Python Programming Basics</h1>
      </div>
      <Chip className="text-white dark" color="success">
        Enrollment : Open
      </Chip>
    </div>
  );
};

export default ThumbnailCard;
