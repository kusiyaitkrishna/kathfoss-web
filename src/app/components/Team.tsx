"use client";

import React, { useState } from "react";
import { Box, Typography, Button, Modal, Grid2 } from "@mui/material";
import Link from "next/link";
import { teamMembers } from "../data/meet-our-team";
import TeamMember from "@/components/ui/MeetOurTeam/TeamMember";
import TeamMemberModal from "@/components/ui/MeetOurTeam/TeamMemberModal";
import { TeamMemberProps } from "@/type/team-memeber";

interface TeamProps {
  showAll?: boolean;
}

const Team: React.FC<TeamProps> = ({ showAll }) => {
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
    <Box sx={{ padding: "2rem 5%" }}>
      <Typography variant="h2" align="center" gutterBottom>
        Meet Our Team
      </Typography>
      <Box mt={4}>
        <Box mb={6}>
          <Grid2 container spacing={2} justifyContent="center">
            {teamMembers.mainCommittee.slice(0, showAll ? undefined : 9).map((member, index) => (
              <TeamMember key={index} member={member} handleOpen={handleOpen} />
            ))}
          </Grid2>
        </Box>
        <Box textAlign="center" mt={4}>
          <Link href="/meet-our-team" passHref>
            <Button variant="contained" color="secondary">
              See More
            </Button>
          </Link>
        </Box>
      </Box> 
      <TeamMemberModal open={open} handleClose={handleClose} member={selectedMember} />
    </Box>
  );
};

export default Team;