// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import PlanetCard from "./subComponents/PlanetCard";
import PopularCoursesCard from "./subComponents/PopularCoursesCard";
import PersonalCourseLib from "./subComponents/PersonalCourseLib";
import { changeTab } from "../NavBar/activeTabSlice";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(changeTab("Home"));

  return (
    <div className="px-[5%] bg-[#212224]">
      <div className="bg-[#28292b] rounded-3xl p-[3rem] flex flex-col gap-[3rem]">
        <PlanetCard />
        <PopularCoursesCard />
        <PersonalCourseLib />
      </div>
    </div>
  );
};

export default Home;
