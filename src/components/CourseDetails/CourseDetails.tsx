// Dependencies
import { useDispatch } from "react-redux";
import { Button } from "@nextui-org/react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Local Files
import { changeTab } from "../NavBar/activeTabSlice";
import ThumbnailCard from "./subComponents/ThumbnailCard";
import CourseStatCard from "./subComponents/CourseStatCard";
import SyllabusAccordion from "./subComponents/SyllabusAccordion";

const CourseDetails = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const [courseDetails, setCourseDetails] = useState({
    id: 0,
    description: "",
    time: "",
    schedule: "",
    location: "",
    prerequisites: [],
    syllabus: [],
  });

  dispatch(changeTab("Userlib"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  useEffect(() => {
    fetch(process.env.REACT_APP_PROXY + `/api/courses/courseDetail/${location.state.id}`)
      .then((res) => res.json())
      .then((data) => setCourseDetails(data))
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  return (
    <div className="px-[5%] bg-[#212224]">
      <div className="bg-[#28292b] rounded-3xl p-[4rem] flex flex-col gap-[3rem]">
        <div className="p-[2rem] bg-[#212224] rounded-3xl flex flex-col gap-[1rem]">
          <ThumbnailCard
            thumbnail={location.state.thumbnail}
            instructor={location.state.instructor}
            name={location.state.name}
            enrollmentStatus={location.state.enrollmentStatus}
          />

          <div className="p-[2rem] flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-[0.7rem]">
              <div className="flex justify-between items-end">
                <h1 className="text-xl font-bold text-white">Course Description</h1>
                <Button
                  color="warning"
                  className="dark"
                  variant="ghost"
                  radius="full"
                  isDisabled={location.state.enrollmentStatus === "Closed" ? true : false}
                >
                  Join Course
                </Button>
              </div>
              <p className="text-default-500">{courseDetails.description}</p>
            </div>

            <CourseStatCard
              location={courseDetails.location}
              duration={location.state.duration}
              schedule={courseDetails.schedule}
              time={courseDetails.time}
            />

            <div className="flex flex-col gap-[0.7rem]">
              <h1 className="text-xl font-bold text-white">Prerequisites</h1>
              <ul className="text-default-500">
                {courseDetails.prerequisites.map((data, index) => {
                  return (
                    <li key={index} className="list-disc list-inside">
                      {data}
                    </li>
                  );
                })}
              </ul>
            </div>

            <SyllabusAccordion syllabus={courseDetails.syllabus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
