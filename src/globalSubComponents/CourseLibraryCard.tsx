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

type CourseLibraryCardProps = {
  data: number[];
};

const CourseLibraryCard = (props: CourseLibraryCardProps) => {
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
        {props.data.map((ele) => {
          return (
            <TableRow key={ele} className="cursor-pointer hover:scale-[1.02] duration-[200ms] ease-in-out">
              <TableCell className="w-[7rem]">
                <div
                  className="relative w-[100%] pb-[100%] overflow-hidden"
                  style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)" }}
                >
                  <img
                    src="https://coderpad.io/wp-content/uploads/2022/09/coderpad-blogpost-python-red-1.png"
                    className="rounded-3xl absolute top-[0] left-[0] object-cover h-[100%] w-[100%]"
                    alt=""
                    style={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)" }}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <b className="max-w-[12rem] text-white">Python Programming Basics</b>
                  <div className="flex text-default-500 gap-[0.3rem]">
                    <FaGraduationCap className="text-xl" />
                    <span className="max-w-[10rem]">Jonnathan nolan</span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col items-center">
                  <div className="flex gap-[0.3rem]">
                    <FaClock className="text-default-500 text-xl" />
                    <b className="text-white">Duration</b>
                  </div>
                  <span className="text-default-500 max-w-[10rem]">6 Weeks</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col items-center">
                  <b className="text-white">Status</b>
                  <Chip color="success" variant="flat">
                    Open
                  </Chip>
                </div>
              </TableCell>
              <TableCell>
                <Progress
                  color="danger"
                  value={60}
                  size="md"
                  className="max-w-md text-white"
                  label="Progress"
                  showValueLabel
                />
              </TableCell>
              <TableCell>
                <div className="flex justify-end">
                  <Button color="primary"> Mark Complete </Button>
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
