import React from "react";
import { Box, Typography, Grid2 } from "@mui/material";
import { TeamMemberProps } from "@/type/team-memeber";
import Image from "next/image";

interface TeamMemberTypes {
  member: TeamMemberProps;
  handleOpen: (member: TeamMemberProps) => void;
}

const TeamMember: React.FC<TeamMemberTypes> = ({ member, handleOpen }) => {
  return (
    <Grid2 sx={{display: "flex", justifyContent: "center"}}>
      <Box
        onClick={() => handleOpen(member)}
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "400px",
          cursor: "pointer",
          borderRadius: "8px",
          "&:hover img": {
            transform: "scale(1.1)",
          },
        }}
      >
      <Image
        src={member.image}
        alt={member.name}
        width={300} 
        height={300} 
        style={{
        width: "63%", 
        height: "auto",
        borderRadius: "8px",
        transition: "transform 0.3s ease-in-out",
  }}
  priority={true} 
/>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            width:"63%",
            background: "rgba(0, 0, 0, 0.0)",
            color: "#FFF",
            padding: "0.5rem",
            textAlign: "center",
          }}
        >
          <Typography variant="h6">{member.name}</Typography>
          <Typography variant="body2">{member.role}</Typography>
        </Box>
      </Box>
    </Grid2>
  );
};

export default TeamMember;
