// Dependencies
import { Card, CardHeader, CardBody, Chip, Listbox, ListboxItem } from "@nextui-org/react";

// Local Files
import "./UserStat.css";

const UserStat = () => {
  return (
    <div className="flex justify-between">
      <div className="h-[22rem] w-[22rem] rounded-3xl profilePic"></div>

      <Card className="max-w-[350px] bg-transparent dark" shadow="none">
        <CardHeader className="flex gap-3">
          <div className="flex flex-col">
            <Chip color="success" variant="dot" className="my-4">
              Online
            </Chip>
            <p className="text-md">Zoey Gabrielle Turner</p>
            <p className="text-small text-default-500">student</p>
          </div>
        </CardHeader>
        <CardBody>
          <p className="text-default-500">
            Web development student, Problem solver, and Tech Enthusiast. Passionate about creating digital experiences.
            Explores trends, attends meetups, and contributes to open-source projects. Believes in tech's power to
            connect people. Excited to make a mark!
          </p>
        </CardBody>
      </Card>

      <Listbox aria-label="Actions" className="max-w-[350px] bg-[#28292b] rounded-3xl p-[2rem] dark">
        <ListboxItem showDivider key="Courses Completed">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Courses Completed</p>
            <p className="text-[#F31260] font-bold">33</p>
          </div>
        </ListboxItem>
        <ListboxItem showDivider key="Ongoing Courses">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Ongoing Courses</p>
            <p className="text-[#F31260] font-bold">6</p>
          </div>
        </ListboxItem>
        <ListboxItem showDivider key="Friends Online">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Friends Online</p>
            <p className="text-[#F31260] font-bold">5</p>
          </div>
        </ListboxItem>
        <ListboxItem key="Friends Online">
          <div className="flex justify-between h-[3.3rem] items-center">
            <p className="text-white font-semibold">Leaderboard Rank</p>
            <p className="text-[#F31260] font-bold">1526</p>
          </div>
        </ListboxItem>
      </Listbox>
    </div>
  );
};

export default UserStat;
