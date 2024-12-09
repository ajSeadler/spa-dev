import { FaGraduationCap, FaBuilding, FaTools } from "react-icons/fa";

const Education = () => {
  return (
    <div className="education-and-work">
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
          <p className="education-institution">
            Oklahoma University & Full Stack Academy
          </p>
          <p className="education-duration">Completed: December 2023</p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="work-experience">
        <h2 className="section-heading">
          <FaBuilding className="section-icon" />
          Work Experience
        </h2>
        <div className="work-item">
          <h3 className="work-title">
            <FaTools className="work-icon" />
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
        <div className="work-item">
          <h3 className="work-title">
            <FaTools className="work-icon" />
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
    </div>
  );
};

export default Education;
