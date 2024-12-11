import { Link } from "react-router-dom";
import {
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaVuejs,
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { Box, Container, Grid, Typography, Button, Chip } from "@mui/material";

const About = () => {
  return (
    <>
      <div id="about"></div>
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          {/* Heading */}
          <Typography
            variant="h3"
            component="h2"
            sx={{ fontWeight: 600, mb: 4 }}
          >
            About <span style={{ color: "#1976d2" }}>Me</span>
          </Typography>

          {/* Description */}
          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            My name is Anthony Seadler, though most people call me AJ. I'm a
            full-stack developer with a Web Development certificate from the
            University of Oklahoma and Fullstack Academy. Currently, I’m
            pursuing a Bachelor of Science in Cybersecurity at Southern Nazarene
            University, combining my development experience with a strong focus
            on security.
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 3 }}>
            Below you can find some more information about me and the tech I
            develop with, along with some real-world skills I possess!
          </Typography>

          {/* Tech Stack */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
              Tech Stack
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4} md={3}>
                <Chip
                  label="JavaScript"
                  icon={<FaJsSquare />}
                  sx={{
                    backgroundColor: "#F7DF1E",
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Chip
                  label="TypeScript"
                  icon={<SiTypescript />}
                  sx={{
                    backgroundColor: "#007ACC",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Chip
                  label="HTML5"
                  icon={<FaHtml5 />}
                  sx={{
                    backgroundColor: "#E34F26",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Chip
                  label="CSS3"
                  icon={<FaCss3Alt />}
                  sx={{
                    backgroundColor: "#1572B6",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Chip
                  label="React.js"
                  icon={<FaReact />}
                  sx={{
                    backgroundColor: "#61DAFB",
                    color: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Chip
                  label="Node.js"
                  icon={<FaNodeJs />}
                  sx={{
                    backgroundColor: "#339933",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Chip
                  label="PostgreSQL"
                  icon={<FaDatabase />}
                  sx={{
                    backgroundColor: "#336791",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Chip
                  label="Python"
                  icon={<FaPython />}
                  sx={{
                    backgroundColor: "#3776AB",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Chip
                  label="Vue.js"
                  icon={<FaVuejs />}
                  sx={{
                    backgroundColor: "#42B883",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Core Skills */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
              Core Skills
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1">Full-stack Development</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1">Scripting</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1">Intrusion Detection</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1">Linux OS</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1">Windows Admin</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1">Mac OS</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1">Problem Solving</Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="body1">Debugging</Typography>
              </Grid>
            </Grid>
          </Box>

          {/* Call-to-Action */}
          <Box sx={{ textAlign: "center", mt: 10 }}>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Take a Look at My Projects
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/projects"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                padding: "10px 20px",
                fontSize: "16px",
              }}
            >
              View Projects
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default About;
