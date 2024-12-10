/* eslint-disable react/no-unescaped-entities */
import { FaGraduationCap, FaBuilding, FaMedkit } from "react-icons/fa";
import { PiShareNetworkFill } from "react-icons/pi";

const Education = () => {
  return (
    <div className="education-and-work">
      {/* Work Experience Section */}
      <section className="work-experience">
        <h2 className="section-heading">
          <FaBuilding className="section-icon" />
          Work Experience
        </h2>
        <div className="work-item">
          <h3 className="work-title">
            <FaMedkit className="work-icon" />
            Treatment Team Manager
          </h3>
          <p className="work-company">Community Pathways Unlimited </p>
          <p className="work-duration">
            Dates of Employment: August 2015 - May 2020
          </p>
          <p className="work-description">
            Collaborate with clinicians to ensure timely submission of treatment
            plan extension information. Maintain communication with the
            Department of Mental Health, updating approved service units and
            notifying relevant parties. Track extension renewal dates, assign
            staff for completion, and supervise the prior authorization
            specialist's work.
          </p>
        </div>
        <div className="work-item">
          <h3 className="work-title">
            <PiShareNetworkFill className="work-icon" />
            Telecom Tech
          </h3>
          <p className="work-company">SCC, LLC</p>
          <p className="work-duration">
            Dates of Employment: August 2015 - May 2020
          </p>
          <p className="work-description">
            Conducted service calls involving telecommunications and network
            troubleshooting, as well as installations. Gained hands-on
            experience in fiber optic installation and structured cabling,
            including UTP/STP category cables.
          </p>
        </div>
      </section>
      {/* Education Section */}
      <section className="education">
        <h2 className="section-heading">
          <FaGraduationCap className="section-icon" />
          Education
        </h2>
        <div className="education-item">
          <h3 className="education-title">
            Bachelor of Science in Cybersecurity
          </h3>
          <p className="education-institution">Southern Nazarene University</p>
          <p className="education-duration">
            Expected Graduation: December 2025
          </p>
        </div>
        <div className="education-item">
          <h3 className="education-title">Web Development Certificate</h3>
          <p className="education-duration">
            6 Month immersive web development bootcamp
          </p>
          <p className="education-institution">
            University of Oklahoma & Full Stack Academy
          </p>

          <p className="education-duration">Completed: December 2023</p>
        </div>
      </section>
    </div>
  );
};

export default Education;
