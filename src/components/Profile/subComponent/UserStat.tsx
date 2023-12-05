// Dependencies
import { Card, CardHeader, CardBody, Chip, Listbox, ListboxItem } from "@nextui-org/react";
import { useSelector } from "react-redux";

// Local Files
import "./UserStat.css";
import { RootState } from "../../../store";

const UserStat = () => {
  const userData = useSelector((state: RootState) => state.userData.value);

  let completedCourses = 0;
  let ongoingCourses = 0;

  for (let data of userData.courses) {
    if (data.progress < 100) {
      ongoingCourses++;
    } else {
      completedCourses++;
    }
  }

  return (
    <div className="flex justify-between">
      <div className="h-[22rem] w-[22rem] rounded-3xl profilePic"></div>

      <Card className="max-w-[350px] bg-transparent dark" shadow="none">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <Chip color="success" variant="dot" className="my-4">
              Online
            </Chip>
            <p className="text-md">{userData.name}</p>
            <p className="text-small text-default-500">{userData.profession}</p>
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-default-500">{userData.bio}</p>
        </CardBody>
      </Card>

      <Listbox aria-label="Actions" className="max-w-[350px] bg-[#28292b] rounded-3xl p-[2rem] dark">
        <ListboxItem showDivider key="Courses Completed">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Courses Completed</p>
            <p className="text-[#F31260] font-bold">{completedCourses}</p>
          </div>
        </ListboxItem>
        <ListboxItem showDivider key="Ongoing Courses">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Ongoing Courses</p>
            <p className="text-[#F31260] font-bold">{ongoingCourses}</p>
          </div>
        </ListboxItem>
        <ListboxItem showDivider key="Friends Online">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Friends Online</p>
            <p className="text-[#F31260] font-bold">{userData.friendsOnline}</p>
          </div>
        </ListboxItem>
        <ListboxItem key="Friends Online">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Leaderboard Rank</p>
            <p className="text-[#F31260] font-bold">{userData.rank}</p>
          </div>
        </ListboxItem>
      </Listbox>
    </div>
  );
};

export default UserStat;
