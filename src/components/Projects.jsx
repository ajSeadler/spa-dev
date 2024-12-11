import { Box, Container, Grid, Typography, Button, Chip } from "@mui/material";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Skate Tracker",
    description:
      "A social app for skateboarders to track tricks, earn points, and share photos or videos of their tricks with the community.",
    link: "#",
    repo: "https://github.com/example/portfolio-website",
    image: "/skate-tracker.png",
    techStack: ["React.js", "Postgres", "Express.js", "Node.js"],
  },
  {
    title: "Circle of Fifths Viewer",
    description:
      "An interactive Circle of Fifths tool to explore musical key relationships, view notation, and discover chords for each scale.",
    link: "#",
    repo: "https://github.com/example/e-commerce-app",
    image: "/cof.png",
    techStack: ["React.js", "VexFlow", "JavaScript", "CSS", "Node.js"],
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with end-to-end encryption.",
    link: "#",
    repo: "https://github.com/example/chat-application",
    image: "/ds-site.png",
    techStack: ["Socket.IO", "Express", "React"],
  },
];

const Projects = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ fontWeight: 600, mb: 4 }}>
          Project <span style={{ color: "#1976d2" }}>History</span>
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  border: "1px solid #ddd",
                  borderRadius: 2,
                  boxShadow: 2,
                  overflow: "hidden",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Box sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {project.title}{" "}
                      <FaExternalLinkAlt
                        style={{ marginLeft: "8px", color: "#1976d2" }}
                      />
                    </a>
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.techStack.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        sx={{ marginRight: 1, mb: 1 }}
                        variant="outlined"
                        color="primary"
                      />
                    ))}
                  </Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        textTransform: "none",
                      }}
                    >
                      <FaGithub />
                      Repo
                    </Button>
                    {project.link !== "#" && (
                      <Button
                        variant="outlined"
                        color="primary"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          textTransform: "none",
                        }}
                      >
                        Demo
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            Let’s Collaborate
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Interested in working together or learning more about my journey?
            Feel free to reach out!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              href="/resume.pdf"
              sx={{ textTransform: "none" }}
            >
              View My Github
            </Button>
            <Button
              variant="outlined"
              color="primary"
              href="https://linkedin.com/in/yourprofile"
              sx={{ textTransform: "none" }}
            >
              Connect on LinkedIn
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
