// Dependencies
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

// Local Files
import CourseCard from "../../../globalSubComponents/CourseCard";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const PopularCoursesCard = () => {
  const navigate = useNavigate();

  return (
    <div className="rounded-3xl flex flex-col px-[3rem] pt-[3rem] gap-[2rem] bg-[#212224]">
      <h1 className="font-lilita text-white text-3xl">
        <span>Most Popular </span>
        <span className="text-[#f31260]"> Right Now</span>
      </h1>
      <div className="flex gap-[1.5rem] justify-center flex-wrap">
        {data.map((ele) => {
          return <CourseCard key={ele} className="shrink-0 hover:scale-105" />;
        })}
      </div>
      <Button
        color="danger"
        className="max-w-[9rem] font-semibold relative bottom-[-20px] left-[50%] translate-x-[-50%]"
        variant="shadow"
        onClick={() => navigate(`../Courses`)}
        radius="full"
      >
        Browse Popular
      </Button>
    </div>
  );
};

export default PopularCoursesCard;
