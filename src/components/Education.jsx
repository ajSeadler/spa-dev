import { Box, Container, Typography } from "@mui/material";
import Timeline from "./Timeline";

const Education = () => {
  return (
    <Box sx={{ minHeight: "100vh", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          style={{ fontWeight: 600, marginBottom: "32px" }}
        >
          Education <span style={{ color: "#1976d2" }}>History</span>
        </Typography>

        {/* Education Item 1 */}
        <Box
          sx={{
            p: 3,
            border: "1px solid #ddd",
            borderRadius: 2,
            boxShadow: 2,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
            marginBottom: "32px", // Space between the cards
          }}
        >
          <Typography variant="h6" style={{ fontWeight: 500 }}>
            Bachelor of Science in Cybersecurity
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "8px" }}>
            Southern Nazarene University
          </Typography>
          <Typography variant="body2">
            Expected Graduation: December 2025
          </Typography>
        </Box>

        {/* Education Item 2 */}
        <Box
          sx={{
            p: 3,
            border: "1px solid #ddd",
            borderRadius: 2,
            boxShadow: 2,
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Typography variant="h6" style={{ fontWeight: 500 }}>
            Web Development Certificate
          </Typography>
          <Typography variant="body1" style={{ marginBottom: "8px" }}>
            University of Oklahoma & Full Stack Academy
          </Typography>
          <Typography variant="body2" style={{ marginBottom: "8px" }}>
            6-month immersive web development bootcamp
          </Typography>
          <Typography variant="body2">Completed: December 2023</Typography>
        </Box>
      </Container>
      <Timeline />
    </Box>
  );
};

export default Education;
