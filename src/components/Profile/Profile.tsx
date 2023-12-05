// Dependencies
import { useDispatch } from "react-redux";
import { Divider } from "@nextui-org/react";

// Local Files
import "./Profile.css";
import { changeTab } from "../NavBar/activeTabSlice";
import UserStat from "./subComponent/UserStat";
import RecentCourses from "./subComponent/RecentCourses";
import PersonalCourseLib from "../../globalSubComponents/PersonalCourseLib";

const Profile = () => {
  const dispatch = useDispatch();
  dispatch(changeTab("Profile"));

  window.scrollTo({
    top: 0,
  });

  return (
    <div className="px-[5%] bg-[#212224]">
      <div className="bg-[#28292b] rounded-3xl p-[3rem] flex flex-col gap-[3rem]">
        <div className="rounded-3xl flex flex-col p-[3rem] gap-[2rem] bg-[#212224]">
          <UserStat />
          <Divider className="dark" />
          <RecentCourses />
        </div>
        <div className="rounded-3xl flex flex-col p-[3rem] gap-[2rem] bg-[#212224]">
          <PersonalCourseLib />
        </div>
      </div>
    </div>
  );
};

export default Profile;
