import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Button,
  Paper,
} from "@mui/material";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ fontWeight: 600, mb: 4 }}
        >
          Get in <span style={{ color: "#1976d2" }}>Touch</span>
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Contact Information Section */}
          <Grid item xs={12} md={5}>
            <Paper
              sx={{ p: 4, borderRadius: 2, boxShadow: 3, textAlign: "center" }}
            >
              <Avatar
                alt="Your Name"
                src="/portrait.jpg" // Your portrait image
                sx={{ width: 150, height: 150, mb: 3, mx: "auto" }}
              />
              <Typography variant="h5" sx={{ fontWeight: 500, mb: 2 }}>
                Anthony Seadler
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Web Developer | Cybersecurity Enthusiast
              </Typography>

              <Typography variant="body2" sx={{ mb: 2 }}>
                Email:{" "}
                <a href="mailto:your.email@example.com">
                  anthonyseadler@gmail.com
                </a>
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Button
                  variant="outlined"
                  color="primary"
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <FaLinkedin />
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  href="https://github.com/yourprofile"
                  target="_blank"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <FaGithub />
                  GitHub
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
