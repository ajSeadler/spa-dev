import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import SchoolIcon from "@mui/icons-material/School";

import Typography from "@mui/material/Typography";

export default function CustomizedTimeline() {
  return (
    <>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <SchoolIcon />
            </TimelineDot>

            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              University of Louisville
            </Typography>

            <Typography>Louisville, Kentucky</Typography>
            <Typography>Communications - 60 credit hours earned</Typography>
            <Typography>2015-2020</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              South Oldham High School
            </Typography>
            <Typography>Louisville, Kentucky</Typography>
            <Typography>Class of 2015</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  );
}
