// Dependencies
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";

// Local Files
import { changeTab } from "../NavBar/activeTabSlice";
import CourseCard from "../../globalSubComponents/CourseCard";
import { RootState } from "../../store";
import { setCourseData } from "../../courseDataSlice";

const Courses = () => {
  const [courseCount, setCourseCount] = useState(0);
  const [curPage, setCurPage] = useState(1);

  const courseData = useSelector((state: RootState) => state.courseData.value);

  const dispatch = useDispatch();
  dispatch(changeTab("Courses"));

  window.scrollTo({
    top: 0,
  });

  useEffect(() => {
    fetch(process.env.REACT_APP_PROXY + "/api/courses/courseCount")
      .then((res) => res.json())
      .then((data) => setCourseCount(data))
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  useEffect(() => {
    fetch(process.env.REACT_APP_PROXY + `/api/courses/courseInfo/${(curPage - 1) * 15 + 1}/${curPage * 15}`)
      .then((res) => res.json())
      .then((data) => dispatch(setCourseData(data)))
      .catch((err) => {
        throw new Error(err);
      });
  }, [curPage]);

  return (
    <div className="px-[5%] bg-[#212224]">
      <div className="bg-[#28292b] rounded-3xl p-[3rem] flex flex-col gap-[3rem]">
        <div className="rounded-3xl flex flex-col p-[3rem] gap-[2rem] bg-[#212224]">
          <h1 className="font-lilita text-white text-3xl">
            <span>Available </span>
            <span className="text-[#f31260]"> Courses</span>
          </h1>
          <div className="flex gap-[1.5rem] justify-center flex-wrap">
            {courseData.map((data, index) => {
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
          <Pagination
            loop
            showControls
            color="danger"
            variant="flat"
            total={courseCount ? Math.ceil(courseCount / 15) : 3}
            initialPage={1}
            className="self-center dark"
            onChange={setCurPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Courses;
