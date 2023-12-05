// Dependencies
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Local Files
import CourseLibraryCard from "./CourseLibraryCard";
import { RootState } from "../store";

const PersonalCourseLib = () => {
  const navigate = useNavigate();

  const recentCourses = useSelector((state: RootState) => state.recentCourse.value).slice(0, 5);

  return (
    <div className="rounded-3xl flex flex-col px-[3rem] pt-[3rem] gap-[2rem] bg-[#212224]">
      <h1 className="font-lilita text-white text-3xl">
        <span>Your Course </span>
        <span className="text-[#f31260]"> Library</span>
      </h1>
      <CourseLibraryCard libraryData={recentCourses} />
      <Button
        color="danger"
        className="max-w-[8rem] font-semibold relative bottom-[-20px] left-[50%] translate-x-[-50%]"
        variant="shadow"
        onClick={() => navigate(`../Userlib`)}
        radius="full"
      >
        View Library
      </Button>
    </div>
  );
};

export default PersonalCourseLib;
