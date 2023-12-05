// Dependencies
import { useSelector } from "react-redux";

// Local Files
import CourseCard from "../../../globalSubComponents/CourseCard";
import { RootState } from "../../../store";

const RecentCourses = () => {
  const recentCourses = useSelector((state: RootState) => state.recentCourse.value).slice(0, 5);

  return (
    <div className="rounded-3xl flex flex-col gap-[2rem] bg-[#212224]">
      <h1 className="font-lilita text-white text-3xl">
        <span>Recently Enrolled </span>
        <span className="text-[#f31260]"> Courses</span>
      </h1>
      <div className="flex gap-[1.5rem] justify-center flex-wrap">
        {recentCourses.map((data, index) => {
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
    </div>
  );
};

export default RecentCourses;
