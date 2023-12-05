// Dependencies
import { FaClock, FaLocationDot } from "react-icons/fa6";
import { CgCalendarDates } from "react-icons/cg";
import { PiTimerFill } from "react-icons/pi";
import { Table, TableBody, TableHeader, TableColumn, TableRow, TableCell } from "@nextui-org/react";

type CourseStatCardProps = {
  location: string;
  duration: string;
  schedule: string;
  time: string;
};

const CourseStatCard = (props: CourseStatCardProps) => {
  return (
    <Table hideHeader removeWrapper isStriped className="dark" aria-label="Course-library">
      <TableHeader>
        <TableColumn>Location</TableColumn>
        <TableColumn>Duration</TableColumn>
        <TableColumn>Schedule</TableColumn>
        <TableColumn>Time</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <div className="flex flex-col items-center">
              <div className="flex gap-[0.3rem]">
                <FaLocationDot className="text-default-500 text-xl" />
                <b className="text-white">Location</b>
              </div>
              <span className="text-default-500 max-w-[10rem]">{props.location}</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex flex-col items-center">
              <div className="flex gap-[0.3rem]">
                <FaClock className="text-default-500 text-xl" />
                <b className="text-white">Duration</b>
              </div>
              <span className="text-default-500 max-w-[10rem]">{props.duration}</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex flex-col items-center">
              <div className="flex gap-[0.3rem]">
                <CgCalendarDates className="text-default-500 text-xl" />
                <b className="text-white">Schedule</b>
              </div>
              <span className="text-default-500 max-w-[10rem]">{props.schedule}</span>
            </div>
          </TableCell>
          <TableCell>
            <div className="flex flex-col items-center">
              <div className="flex gap-[0.3rem]">
                <PiTimerFill className="text-default-500 text-xl" />
                <b className="text-white">Time</b>
              </div>
              <span className="text-default-500 max-w-[10rem]">{props.time}</span>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CourseStatCard;
