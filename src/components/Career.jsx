/* eslint-disable react/no-unescaped-entities */
import { PiShareNetworkFill } from "react-icons/pi";
import { FaMedkit } from "react-icons/fa";
import { Box, Container, Typography } from "@mui/material";

const Career = () => {
  return (
    <Box sx={{ minHeight: "100vh", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h2"
          style={{ fontWeight: 600, marginBottom: "32px" }}
        >
          Work <span style={{ color: "#1976d2" }}>History</span>
        </Typography>

        {/* Career Item 1 */}
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
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
            }}
          >
            <FaMedkit style={{ marginRight: "8px" }} />
            Treatment Team Manager
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Community Pathways Unlimited
          </Typography>
          <Typography variant="body2">
            Dates of Employment: August 2015 - May 2020
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Collaborated with clinicians to ensure timely submission of
            treatment plan extension information. Maintained communication with
            the Department of Mental Health, updating approved service units and
            notifying relevant parties. Tracked extension renewal dates,
            assigned staff for completion, and supervised the prior
            authorization specialist's work.
          </Typography>
        </Box>

        {/* Career Item 2 */}
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
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
            }}
          >
            <PiShareNetworkFill style={{ marginRight: "8px" }} />
            Telecom Tech
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            SCC, LLC
          </Typography>
          <Typography variant="body2">
            Dates of Employment: August 2015 - May 2020
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Conducted service calls involving telecommunications and network
            troubleshooting, as well as installations. Gained hands-on
            experience in fiber optic installation and structured cabling,
            including UTP/STP category cables.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Career;
