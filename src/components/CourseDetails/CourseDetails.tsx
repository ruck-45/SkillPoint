// Dependencies
import { useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";

// Local Files
import "./CourseDetails.css";
import { changeTab } from "../NavBar/activeTabSlice";
import ThumbnailCard from "./subComponents/ThumbnailCard";
import CourseStatCard from "./subComponents/CourseStatCard";
import SyllabusAccordion from "./subComponents/SyllabusAccordion";

const prerequisits = [
  "Familiarity with basic computer operations, file management, and navigating through different operating systems",
  "A conceptual understanding of algorithms and problem-solving approaches, even at a basic level, will enhance your comprehension of programming logic.",
  "The ability to think logically and sequentially is essential for understanding programming concepts. This course will build upon logical structures, so having a foundation in logical thinking is beneficial.",
  "While not mandatory, a basic understanding of mathematical concepts such as variables, equations, and basic arithmetic operations can be helpful in grasping certain programming principles.",
];

const CourseDetails = () => {
  const dispatch = useDispatch();
  dispatch(changeTab("Userlib"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="px-[5%] bg-[#212224]">
      <div className="bg-[#28292b] rounded-3xl p-[4rem] flex flex-col gap-[3rem]">
        <div className="p-[2rem] bg-[#212224] rounded-3xl flex flex-col gap-[1rem]">
          <ThumbnailCard />

          <div className="p-[2rem] flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-[0.7rem]">
              <div className="flex justify-between items-end">
                <h1 className="text-xl font-bold text-white">Course Description</h1>
                <Button color="warning" className="dark" variant="ghost" radius="full">Join Course</Button>
              </div>
              <p className="text-default-500">
                Welcome to the "Python Programming Basics" course! This comprehensive 6-week program is tailored for
                individuals seeking a solid introduction to the world of Python programming. Led by experienced
                instructor John Doe, this course is designed to accommodate both beginners and those with some
                programming background.
              </p>
            </div>

            <CourseStatCard />

            <div className="flex flex-col gap-[0.7rem]">
              <h1 className="text-xl font-bold text-white">Prerequisites</h1>
              <ul className="text-default-500">
                {prerequisits.map((data, index) => {
                  return (
                    <li key={index} className="list-disc list-inside">
                      {data}
                    </li>
                  );
                })}
              </ul>
            </div>

            <SyllabusAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
