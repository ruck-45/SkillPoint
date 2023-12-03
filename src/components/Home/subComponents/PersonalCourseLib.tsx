// Dependencies
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Local Files
import CourseLibraryCard from "../../../globalSubComponents/CourseLibraryCard";
import { changeTab } from "../../NavBar/activeTabSlice";

const PersonalCourseLib = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const browse = () => {
    dispatch(changeTab("Profile"));
    navigate(`../Profile`);
  };

  return (
    <div className="rounded-3xl flex flex-col px-[3rem] pt-[3rem] gap-[2rem] bg-[#212224]">
      <h1 className="font-lilita text-white text-3xl">
        <span>Your Course </span>
        <span className="text-[#f31260]"> Library</span>
      </h1>
      <CourseLibraryCard />
      <Button
        color="danger"
        className="max-w-[8rem] font-semibold relative bottom-[-20px] left-[50%] translate-x-[-50%]"
        variant="shadow"
        onClick={browse}
        radius="full"
      >
        View Library
      </Button>
    </div>
  );
};

export default PersonalCourseLib;
