// Dependencies
import { useDispatch } from "react-redux";

// Local Files
import { changeTab } from "../NavBar/activeTabSlice";
import CourseLibraryCard from "../../globalSubComponents/CourseLibraryCard";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const Userlib = () => {
  const dispatch = useDispatch();
  dispatch(changeTab("Userlib"));

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="px-[5%] bg-[#212224]">
      <div className="bg-[#28292b] rounded-3xl p-[3rem]">
        <div className="rounded-3xl flex flex-col p-[3rem] gap-[2rem] bg-[#212224]">
          <div className="rounded-3xl flex flex-col px-[3rem] pt-[3rem] gap-[2rem] bg-[#212224]">
            <h1 className="font-lilita text-white text-3xl">
              <span>Your Course </span>
              <span className="text-[#f31260]"> Library</span>
            </h1>
            <CourseLibraryCard data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userlib;
