import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import { TeamMemberProps } from "@/type/team-memeber";
import Image from "next/image";

interface TeamMemberModalProps {
  open: boolean;
  handleClose: () => void;
  member: TeamMemberProps | null;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ open, handleClose, member }) => {
  if (!member) return null;

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "#0E1322",
          color: "#FFF",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <Image
  src={member.image}
  alt={member.name}
  width={500} 
  height={500} 
  style={{
    width: "100%",
    borderRadius: "8px",
    marginBottom: "1rem",
  }}
  priority={true} 
/>
        <Typography variant="h5">{member.name}</Typography>
        <Typography variant="subtitle1">{member.role}</Typography>
        <Typography variant="body1" mt={2}>
          {member.description}
        </Typography>
      </Box>
    </Modal>
  );
};

export default TeamMemberModal;