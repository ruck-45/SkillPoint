// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import "./Profile.css";
import { changeTab } from "../NavBar/activeTabSlice";

const Profile = () => {
  const dispatch = useDispatch();
  dispatch(changeTab("Profile"));
  
  return <div>Profile</div>;
};

export default Profile;
