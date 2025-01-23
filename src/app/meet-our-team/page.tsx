"use client";

import React, { useState } from "react";
import { Header } from '../components';
import { Box, Typography, Grid2 } from "@mui/material";
import { teamMembers } from "../data/meet-our-team";
import { TeamMemberProps } from "@/type/team-memeber";
import TeamMember from "@/components/ui/MeetOurTeam/TeamMember";
import TeamMemberModal from "@/components/ui/MeetOurTeam/TeamMemberModal";

export default function MeetOurTeamPage() {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMemberProps | null>(null);

  const handleOpen = (member: TeamMemberProps) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Box sx={{ width: "80%" }}>
          <Typography variant="h2" align="center" gutterBottom>
            Meet Our Team
          </Typography>
          <br />
          <Typography variant="h2" align="center" gutterBottom>
            Main Committee
          </Typography>
          <br />
          <Grid2
            container
            spacing={2}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: "1rem",
              justifyContent: "center", // Ensures horizontal centering of grid items
              alignItems: "center", // Ensures vertical centering of grid items
            }}
          >
            {teamMembers.mainCommittee.map((member, index) => (
              <TeamMember key={index} member={member} handleOpen={handleOpen} />
            ))}
          </Grid2>
          <br />
          <Typography variant="h2" align="center" gutterBottom>
            Project Supervisors
          </Typography>
          <br />
          <Grid2
            container
            spacing={2}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: "1rem",
              justifyContent: "center", // Ensures horizontal centering of grid items
              alignItems: "center", // Ensures vertical centering of grid items
            }}
          >
            {teamMembers.projectSupervisors.map((member, index) => (
              <TeamMember key={index} member={member} handleOpen={handleOpen} />
            ))}
          </Grid2>
          <br />
          <Typography variant="h2" align="center" gutterBottom>
            Social Media and Communications
          </Typography>
          <br />
          <Grid2
            container
            spacing={2}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: "1rem",
              justifyContent: "center", // Ensures horizontal centering of grid items
              alignItems: "center", // Ensures vertical centering of grid items
            }}
          >
            {teamMembers.socialMedia.map((member, index) => (
              <TeamMember key={index} member={member} handleOpen={handleOpen} />
            ))}
          </Grid2>
          <br />
          <Typography variant="h2" align="center" gutterBottom>
            Executive Members
          </Typography>
          <br />
          <Grid2
            container
            spacing={2}
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: "1rem",
              justifyContent: "center", // Ensures horizontal centering of grid items
              alignItems: "center", // Ensures vertical centering of grid items
            }}
          >
            {teamMembers.executiveMembers.map((member, index) => (
              <TeamMember key={index} member={member} handleOpen={handleOpen} />
            ))}
          </Grid2>
          <br />
          <TeamMemberModal open={open} handleClose={handleClose} member={selectedMember} />
        </Box>
      </Box>
    </>
  );
}