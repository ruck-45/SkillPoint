// Dependencies
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

// Local Files
import "./PlanetCard.css";

const PlanetCard = () => {
  const navigate = useNavigate();

  return (
    <div className="PlanetCard min-h-[20rem] rounded-3xl flex flex-col justify-center p-[3rem] gap-[1rem]">
      <p className="text-white">Welcome To SkillPoint</p>
      <h1 className="font-lilita text-white text-4xl">
        <div>
          <span className="text-[#f31260]">BROWSE</span>
          <span> OUR POPULAR</span>
        </div>
        <div>
          <span>COURSES HERE</span>
        </div>
      </h1>
      <Button color="danger" className="max-w-[8rem] font-semibold" variant="shadow" onClick={() => navigate(`../Courses`)}>
        Browse Now
      </Button>
    </div>
  );
};

export default PlanetCard;
