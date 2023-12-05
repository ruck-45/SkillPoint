// Dependencies
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Local Files
import CourseCard from "../../../globalSubComponents/CourseCard";

const PopularCoursesCard = () => {
  const navigate = useNavigate();
  const [popularCourses, setPopularCourses] = useState(new Array());

  useEffect(() => {
    fetch(process.env.REACT_APP_PROXY + "/api/courses/popular/10")
      .then((resp) => resp.json())
      .then((data) => setPopularCourses(data))
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div className="rounded-3xl flex flex-col px-[3rem] pt-[3rem] gap-[2rem] bg-[#212224]">
      <h1 className="font-lilita text-white text-3xl">
        <span>Most Popular </span>
        <span className="text-[#f31260]"> Right Now</span>
      </h1>
      <div className="flex gap-[1.5rem] justify-center flex-wrap">
        {popularCourses.map((data, index) => {
          return (
            <CourseCard
              key={index}
              id={data.id}
              className="shrink-0 hover:scale-105"
              name={data.name}
              instructor={data.instructor}
              enrollmentStatus={data.enrollmentStatus}
              thumbnail={data.thumbnail}
              duration={data.duration}
            />
          );
        })}
      </div>
      <Button
        color="danger"
        className="max-w-[6rem] font-semibold relative bottom-[-20px] left-[50%] translate-x-[-50%]"
        variant="shadow"
        onClick={() => navigate(`../Courses`)}
        radius="full"
      >
        Browse All
      </Button>
    </div>
  );
};

export default PopularCoursesCard;
