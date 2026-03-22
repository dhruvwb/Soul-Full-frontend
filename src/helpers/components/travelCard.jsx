import React, { useRef } from "react";
import { Box, Button, Card, CardMedia, CardContent, Typography } from "@mui/material";
import {
  AirlineSeatReclineNormal,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";

const TravelCard = ({ image, icon }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", py: 4 }}>
      {/* Scrollable Container */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: 2,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {/* Travel Card */}
        <Card
          sx={{
            flex: "0 0 auto",
            width: 280,
            borderRadius: 2,
            boxShadow: 3,
            overflow: "hidden",
            position: "relative",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 6,
            },
          }}
        >
          <CardMedia
            component="img"
            alt="Travel"
            height="200"
            image={image}
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              Tour Package Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Location
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Duration: 5 Days
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#2e7d32' }}>
              Starting from ₹25,000
            </Typography>
            <Button variant="outlined" size="small" sx={{ mt: 1 }}>
              View Details
            </Button>
          </CardContent>
        </Card>
      </Box>

      {/* Left Navigation Button */}
      <Button
        onClick={scrollLeft}
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          backgroundColor: "#fff",
          minWidth: "40px",
          height: "40px",
          borderRadius: "50%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        <KeyboardArrowLeft />
      </Button>

      {/* Right Navigation Button */}
      <Button
        onClick={scrollRight}
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          backgroundColor: "#fff",
          minWidth: "40px",
          height: "40px",
          borderRadius: "50%",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          "&:hover": { backgroundColor: "#f0f0f0" },
        }}
      >
        <KeyboardArrowRight />
      </Button>
    </Box>
  );
};

export default TravelCard;
