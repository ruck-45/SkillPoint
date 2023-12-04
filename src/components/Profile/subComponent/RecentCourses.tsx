// Dependencies

// Local Files
import CourseCard from "../../../globalSubComponents/CourseCard";

const data = [1, 2, 3, 4, 5];

const RecentCourses = () => {

  return (
    <div className="rounded-3xl flex flex-col gap-[2rem] bg-[#212224]">
      <h1 className="font-lilita text-white text-3xl">
        <span>Recently Enrolled </span>
        <span className="text-[#f31260]"> Courses</span>
      </h1>
      <div className="flex gap-[1.5rem] justify-center flex-wrap">
        {data.map((ele) => {
          return <CourseCard key={ele} className="shrink-0 hover:scale-105" />;
        })}
      </div>
    </div>
  );
};

export default RecentCourses;
