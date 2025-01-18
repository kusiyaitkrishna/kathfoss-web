

import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid2,
} from "@mui/material";

const events = [
  {
    title: "Introducing Ucharan AI",
    description: "Event details: 20th Jan, 2025",
    image: "/images/UpcomingEvents/ucharan-ai.png",
    link: "#",//Updated link for learn more
  },
  {
    title: "Hackathon",
    description: "Event details: 28th June, 2025",
    image: "/images/UpcomingEvents/hackathon.png",
    link: "#",//https://example.com/hackathon
  },
  {
    title: "Git/GitHub Python Workshop",
    description: "Event details: 10th Mar, 2025",
    image: "/images/UpcomingEvents/workshop.png",
    link: "#",
  },
];

export default function UpcomingEvents() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        component="h2"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: 3 }}
      >
        Upcoming Events
      </Typography>
      <Grid2
        container
        spacing={4}
        justifyContent="center" //horizontal centre items
        alignItems="center" //vertical centre items
      >
        {events.map((event, index) => (
          <Grid2  key={index}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}> 
              <CardMedia
                component="img"
                height="140"
                image={event.image}
                alt={event.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.description}
                </Typography>
              </CardContent>
              <Button
                size="small"
                color="primary"
                href={event.link}
                target="_blank"
              >
                Learn More
              </Button>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}