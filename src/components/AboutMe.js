import React from "react";

function AboutMe() {
  return (
    <div className="container">
      <div className="card">
        <h2>About Me</h2>
        <h6>
          I am interested in becoming involved in software development,
          particularly in the context of cloud infrastructure, cybersecurity and
          software engineering (full-stack). Certified in Microsoft Azure
          Fundamentals (AZ-900), and a graduate/certificate recipient of
          Columbia University School of Engineering's Full Stack Web Developer
          Bootcamp.
        </h6>

        <h6>
          I'm experienced in HTML/CSS Web Development, JavaScript/jQuery,
          Node.js, Express.js, MySQL, MongoDB, React.js and .NET in deploying
          Azure resources and general infrastructure via Azure/MS PowerShell,
          CLI, and the Cloud Shell, as well as the Azure Portal.
        </h6>

        <h6>
          I implement an immense focus on developing applications with
          responsive designs that illicit pleasant user experiences. It is a
          firm belief of mine that there is nothing more important in the
          rapidly morphing world of tech than the ability for a user to have a
          genuine interaction, and utility, for an application.
        </h6>
      </div>

      <div className="emblems">
        <img
          src="http://lineadecodigo.com/wp-content/uploads/2014/04/html5.png"
          alt="HTML5"
          className="tech-icon"
        />
        <img
          src="https://i.pinimg.com/originals/eb/7e/20/eb7e20e646f5b7ec9ed4f8f78a5dee8f.png"
          alt="CSS3"
          className="tech-icon"
        />
        <img
          src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png"
          alt="JS"
          className="tech-icon"
        />
        <img
          src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
          alt="NodeJS"
          className="tech-icon"
        />
        <img
          src="http://pngimg.com/uploads/mysql/small/mysql_PNG23.png"
          alt="MySQL"
          className="tech-icon"
        />
        <img
          src="https://img.icons8.com/color/452/mongodb.png"
          alt="MongoDB"
          className="tech-icon"
        />
      </div>
    </div>
  );
}

export default AboutMe;
