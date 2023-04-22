import React from "react";
import img1 from "../../assets/images/team/1.jpg";
import img2 from "../../assets/images/team/2.jpg";
import img3 from "../../assets/images/team/3.jpg";
import TeamMember from "./TeamMember";
const TeamMembers = () => {
  const teamMembers = [
    { name: "John", title: "Engine Expert", img: img1 },
    { name: "Moto", title: "Engine Expert", img: img2 },
    { name: "Patlo", title: "Engine Expert", img: img3 },
  ];
  return (
    <div>
      <div className="text-center mb-4 mt-14">
        <p className="text-2xl font-bold text-orange-600">Team</p>
        <h2 className="text-5xl font-semibold">Meet Our Team</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour,
          <br /> or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid gap-6 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((team) => (
          <TeamMember team={team} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
