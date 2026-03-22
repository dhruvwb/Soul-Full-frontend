import React, { useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const DestinationCarousel = ({
  destinations,
  title = "Top Destinations in India",
  showButtons = true,
  onButtonClick,
}) => {
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
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 4, backgroundColor: "#f9f9f9" }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          mb: 4,
          fontSize: { xs: "1.5rem", md: "2rem" },
          color: "#333",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: { xs: 2, sm: 3 },
            overflowX: "auto", // Allow horizontal scrolling with fingers
            scrollBehavior: "smooth",
            width: "100%",
            "&::-webkit-scrollbar": { display: "none" }, // Hide scrollbars
            "-ms-overflow-style": "none", // IE scrollbar styling
          }}
        >
          {destinations.map((dest, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 auto",
                width: { xs: "85%", sm: "250px" },
                borderRadius: "10px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  height: "150px",
                  backgroundImage: `url(${dest.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              {/* Content */}
              <Box sx={{ p: 2, textAlign: "center" }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", fontSize: "1rem", color: "#444" }}
                >
                  {dest.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: "#777" }}>
                  {dest.duration}
                </Typography>
                {showButtons && (
                  <Button
                    variant="contained"
                    onClick={() => onButtonClick(dest)}
                    sx={{
                      mt: 2,
                      backgroundColor: "orange",
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "0.85rem",
                      textTransform: "none",
                      px: 2,
                      py: 1,
                      "&:hover": { backgroundColor: "#e67e22" },
                    }}
                  >
                    {dest.price}
                  </Button>
                )}
              </Box>
            </Box>
          ))}
        </Box>
        {/* Navigation Buttons */}
        <Button
          onClick={scrollLeft}
          sx={{
            display: { xs: "none", sm: "block" }, // Hide on mobile
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
        <Button
          onClick={scrollRight}
          sx={{
            display: { xs: "none", sm: "block" }, // Hide on mobile
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
    </Box>
  );
};

export default DestinationCarousel;
