// Dependencies
import { useDispatch } from "react-redux";
import { Pagination } from "@nextui-org/react";

// Local Files
import "./Courses.css";
import { changeTab } from "../NavBar/activeTabSlice";
import CourseCard from "../../globalSubComponents/CourseCard";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


const Courses = () => {
  const dispatch = useDispatch();
  dispatch(changeTab("Courses"));

  return (
    <div className="px-[5%] bg-[#212224]">
      <div className="bg-[#28292b] rounded-3xl p-[3rem] flex flex-col gap-[3rem]">
        <div className="rounded-3xl flex flex-col p-[3rem] gap-[2rem] bg-[#212224]">
          <h1 className="font-lilita text-white text-3xl">
            <span>Available </span>
            <span className="text-[#f31260]"> Courses</span>
          </h1>
          <div className="flex gap-[1.5rem] justify-center flex-wrap">
            {data.map((ele) => {
              return <CourseCard key={ele} className="shrink-0 hover:scale-105" />;
            })}
          </div>
          <Pagination loop showControls color="danger" variant="flat" total={5} initialPage={1} className="self-center dark"/>
        </div>
      </div>
    </div>
  );
};

export default Courses;
