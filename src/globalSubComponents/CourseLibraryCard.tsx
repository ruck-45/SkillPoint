// Dependenncies
import {
  Table,
  TableBody,
  TableHeader,
  TableColumn,
  TableRow,
  TableCell,
  Chip,
  Button,
  Progress,
} from "@nextui-org/react";
import { FaGraduationCap } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Local Files
import { removeRecentCourse } from "../recentCourseSlice";
import { markComplete } from "../userLibrarySilce";

type CourseLibraryCardProps = {
  libraryData: {
    id: number;
    name: string;
    instructor: string;
    enrollmentStatus: string;
    thumbnail: string;
    duration: string;
    enrolled: number;
    progress: number;
  }[];
};

const CourseLibraryCard = (props: CourseLibraryCardProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showDetails = (index: number) => {
    navigate(`../CourseDetails`, { state: { ...props.libraryData[index] } });
  };

  const markCourseComplete = (id: number) => {
    dispatch(removeRecentCourse(id));
    dispatch(markComplete(id));
  };

  return (
    <Table hideHeader removeWrapper isStriped className="dark" aria-label="Course-library">
      <TableHeader>
        <TableColumn>Image</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Duration</TableColumn>
        <TableColumn>Status</TableColumn>
        <TableColumn>Progress</TableColumn>
        <TableColumn>Complete</TableColumn>
      </TableHeader>
      <TableBody>
        {props.libraryData.map((data, index) => {
          return (
            <TableRow
              key={index}
              className="cursor-pointer hover:scale-[1.02] duration-[200ms] ease-in-out"
              onClick={() => showDetails(index)}
            >
              <TableCell className="w-[7rem]">
                <div
                  className="relative w-[100%] pb-[100%] overflow-hidden"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}
                >
                  <img
                    src={data.thumbnail}
                    className="rounded-3xl absolute top-[0] left-[0] object-cover h-[100%] w-[100%]"
                    alt=""
                    style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <b className="max-w-[12rem] text-white">{data.name}</b>
                  <div className="flex text-default-500 gap-[0.3rem]">
                    <FaGraduationCap className="text-xl" />
                    <span className="max-w-[10rem]">{data.instructor}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col items-center">
                  <div className="flex gap-[0.3rem]">
                    <FaClock className="text-default-500 text-xl" />
                    <b className="text-white">Duration</b>
                  </div>
                  <span className="text-default-500 max-w-[10rem]">{data.duration}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col items-center">
                  <b className="text-white">Status</b>
                  <Chip
                    color={
                      data.enrollmentStatus === "Open"
                        ? "success"
                        : data.enrollmentStatus === "Closing"
                        ? "warning"
                        : "danger"
                    }
                    variant="flat"
                  >
                    {data.enrollmentStatus}
                  </Chip>
                </div>
              </TableCell>
              <TableCell>
                <Progress
                  color="danger"
                  value={data.progress}
                  size="md"
                  className="max-w-md text-white"
                  label="Progress"
                  showValueLabel
                />
              </TableCell>
              <TableCell>
                <div className="flex justify-end">
                  <Button
                    color="primary"
                    isDisabled={data.progress === 100 ? true : false}
                    onClick={() => markCourseComplete(data.id)}
                  >
                    {data.progress < 100 ? "Mark Complete" : "Completed"}
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CourseLibraryCard;
