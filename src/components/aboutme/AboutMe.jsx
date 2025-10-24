import React from 'react';
import { Card, Navbar, Nav } from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './AboutMe.css'; // Ensure this path is correct
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';


import profileImage from '../../assets/profile.png'; // Ensure this path is correct (match disk casing)
import iqp from '../../assets/iqp.png';
import mhaccImage from '../../assets/MHACC.png';
import mmumage from '../../assets/mmu.png';
import songProject from '../../assets/songProject.png';
import wpi from '../../assets/wpilogo.png';
import almaAI from '../../assets/almaAI.png';

// import catPlaceholder from '../../assets/funny-dancing-cats-fb3-png__700.jpg';

const AboutMe = () => {
  return (
    <div style={{ display: 'flex' }} >
      <div className="navbar" style={{ display: 'flex' }}>
        <div className="resume-container" style={{ padding: '40px', width: '100%' }}>

          <div className="aboutMe">
            <section id="about">
              <br />
              <h1>About Me</h1>

              <div className="about-me-image">
                <img
                  src={profileImage}
                  alt="profile"
                  className="profile-picture"
                />
              </div>

              <p>
                I am actively looking for Summer 2026 internships in <b>software engineering, DevOps, and data science, </b> so please feel free to reach out to me via email at alexli@wpi.edu if you are actively recruiting!
              </p>
              <p>
                I am a <b><span style={{ color: '#00BCD4' }}>Senior</span> pursuing a <span style={{ color: '#00BCD4' }}>Bachelor of Science</span> degree in <span style={{ color: '#00BCD4' }}>Computer Science</span> at <span style={{ color: '#00BCD4' }}>Worcester Polytechnic Institute</span></b> along with a <b>minor in <span style={{ color: '#00BCD4' }}>Data Science</span>.</b> Throughout my academic and professional journey, I have gained experience in various programming languages including <b>Java, C, C++, JS, and Python </b>. In addition, I have a strong background in <b>problem-solving and DSA.</b>
              </p>
              <p>
                You can click to see my
                <a
                  href="https://drive.google.com/file/d/1_o-CztX0B52nUlfUIA1mELn4QuwzCmAw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong style={{ color: 'white' }}> resume </strong>
                </a>
                or check out ways to contact me below.
              </p>
            </section>
          </div>

          <div style={{ height: '80px' }} id="skills"></div>

          <div className="skills">
            <section className="skills">
              <h1>Skills</h1>
              <p><b>Languages: </b>Java; C/C++; Python; JavaScript; x86 assembly; SQL; HTML/CSS; Racket</p>
              <p><b>Technologies: </b>Data Structures and Algorithms, Machine Learning, Spring Boot; Node.js; Flask; JUnit; Bootstrap; React.js</p>
              <p><b>Developer Tools: </b>Linux; MongoDB; Postman; Git; Github Actions; Docker; Firebase; AWS EC2; S3; Agile</p>
            </section>
          </div>
          <div className="experience">
            <section id="experience" style={{ padding: '20px 0' }}>
              <h1 style={{ color: '#00BCD4', textAlign: 'center', marginBottom: '30px' }}>Experience</h1>

              <div className="experienceContainer" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>

                <Card className="card-hover" style={{ width: '20rem', height: '23rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={almaAI} style={{ height: '100px', objectFit: 'contain', background: '#007142' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> Software Engineer Intern @ Alma AI </b> <span style={{ color: '#9CA3AF', fontSize: '0.9em' }}></span></Card.Title>
                    <Card.Text style={{ color: '#9CA3AF', textAlign: 'left' }}>
                      - Contributed to the integration and deployment of TxGemma to an in-house drug discovery application, enabling real-world therapeutic reasoning tasks across drug labeling, safety, and regulatory challenges.
                      <br /><br />
                      - Leveraged the model’s interactive reasoning capabilities to therapeutic development pipelines, enabling predictive tasks such as adverse event detection, molecular property explanation, and regulatory risk assessment.

                      <br /><br />
                     - Implemented frontend integration pipelines for TxGemma using React, TypeScript, and Flask APIs, enabling real-time visualization of model outputs, including molecular embeddings, toxicity predictions, and confidence metrics.

                    </Card.Text>
                    <br />
                  </Card.Body>
                </Card>

                <Card className="card-hover" style={{ width: '20rem', height: '23rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={wpi} style={{ height: '100px', objectFit: 'cover' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> Undergraduate Teaching Assistant @ Worcester Polytechnic Institute </b></Card.Title>
                    <Card.Text style={{ color: '#9CS3AF', textAlign: 'left' }}>
                      - Provided support for undergraduate courses by holding weekly 3-hour office hours, assisting in lab sections, and grading
                      approximately 90 homework submissions bi-weekly.
                      <br /><br />
                      - Delivered detailed code reviews and feedback on coding style, efficiency, and correctness.
                      <br /><br />
                      - Developed supplementary materials and tutorials to enhance student understanding of course concepts.
                    </Card.Text>
                    <br />
                  </Card.Body>
                </Card>

              
              </div>
            </section>
          </div>

          <div className="projects">
            <section id="projects">
              <h1>Projects</h1>
              <div className="projects-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Card className="card-hover" style={{ width: '20rem', height: '35rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={iqp} style={{ height: '150px', objectFit: 'cover', background: '#fff' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> Digital Twin of France’s Energy Market </b> <span style={{ color: '#9CA3AF', fontSize: '0.9em' }}></span></Card.Title>
                    <Card.Text style={{ color: '#9CA3AF', textAlign: 'left' }}>
                      - Led a 5-person team in developing a digital twin to simulate residential energy consumer behavior in France, using real-world survey and market data from EDF and CRE. Predicted consumer switching behavior and policy impacts, achieving high model fidelity (average loss &lt;0.02%). 

                      <br /><br />
                      - Built a frontend dashboard using Next.js, TypeScript, D3.js, and Tailwind CSS, integrating it with a Julia backend via a custom HTTP server to enable real-time scenario execution and interactive policy impact visualization.


                    </Card.Text>
                    <br />

                  </Card.Body>
                </Card>

                <Card className="card-hover" style={{ width: '20rem', height: '35rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={songProject} style={{ height: '150px', objectFit: 'cover' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> MUSIC DISCOVERY APP </b></Card.Title>
                    <Card.Text style={{ color: '#9CA3AF', textAlign: 'left' }}>
                      - Developed a <b>REST API</b> using Spring Boot and MongoDB, including 20+ endpoints, and tested it with Postman.
                      <br /><br />
                      - Built a responsive user interface using <b>React/MUI, Bootstrap, and CSS </b>for exploring, rating, and commenting on 200+ songs. Integrating the <b>Last.FM API</b> to fetch song information
                      <br /><br />
                      - Utilized Docker for containerization of the backend and an <b>AWS EC2</b> instance for deployment. Implemented CI/CD pipelines with <b>GitHub Actions</b> to automate deployment to <b>AWS S3</b>, achieving a <b>40% reduction</b> in deployment times.
                    </Card.Text>
                    <br />
                    <Stack spacing={2} direction="row" justifyContent="center">
                      {/* <Button variant="contained" href="https://github.com/EricLi3/Music-Discovery-API">GitHub</Button>
                      <Button variant="contained" href="http://songchatroom-react-app.s3-website.us-east-2.amazonaws.com/">Website</Button> */}
                    </Stack>
                  </Card.Body>
                </Card>

                <Card className="card-hover" style={{ width: '20rem', height: '35rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={mhaccImage} style={{ height: '150px', objectFit: 'cover' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> ASIAN MENTAL HEALTH PLATFORM </b> <br /><i>In association with the Mental Health Association for Chinese Communities</i></Card.Title>
                    <Card.Text style={{ color: '#9CA3AF', textAlign: 'left' }}>
                      - Worked on a <b>3-person team</b> to design and implement a platform in <b>7 weeks</b>. Implemented a user-friendly experience using <b>HTML, CSS, and JS.</b> Deployed the site on <b>Firebase</b> and implemented <b>CI/CD using GitHub Actions.</b>
                      <br /><br />
                      - Developed a chatbot with <b>IBM WatsonX</b> incorporating <b>10 intents and 5 entities</b> to connect users to mental health professionals and resources. Also provided <b>multilingual guides</b> on mental health stigma using the <b>Google Translate API.</b>
                      <br /><br />
                      - Presented to <b>30 stakeholders</b>, fielding <b>15 questions</b> and receiving <b>positive feedback</b> on the project's potential.

                    </Card.Text>
                    <br />
{/* 
                    <Stack spacing={2} direction="row" justifyContent="center">
                      <Button variant="contained" href="https://github.com/EricLi3/Contemporary-Chinese-Final-Project">GitHub</Button>
                      <Button variant="contained" href="https://contemporary-chinese-final-project.vercel.app/">Website</Button>
                    </Stack> */}
                  </Card.Body>
                </Card>

                <Card className="card-hover" style={{ width: '20rem', height: '30rem', margin: '5px', backgroundColor: 'black', border: '1px solid white' }}>
                  <Card.Img variant="top" src={mmumage} style={{ height: '150px', objectFit: 'cover' }} />
                  <br />
                  <Card.Body>
                    <Card.Title style={{ color: '#D1D5DB' }}><b> VIRTUAL MEMORY MANAGER SIMULATION </b></Card.Title>
                    <Card.Text style={{ color: '#9CA3AF', textAlign: 'left' }}>
                      - Implemented a <b>memory manager in C</b>, simulating virtual memory with <b>paging and swapping</b>, including <b>address translation</b>, per-process <b>page tables</b>, and efficient memory operations within a <b>64-byte simulated</b> physical memory
                      <br /><br />
                      - Enhanced system capabilities by supporting <b>disk swapping</b> with a robust <b>round-robin eviction</b> strategy, ensuring process isolation and resource efficiency

                    </Card.Text>
                    <Stack spacing={2} direction="row" justifyContent="center">
                      {/* <Button variant="contained" href="https://github.com/EricLi3/Operating-Systems/tree/main/Projects/Project%203">GitHub</Button> */}
                      {/* <Button variant="contained" href="https://contemporary-chinese-final-project.vercel.app/">Website</Button> */}
                    </Stack>
                  </Card.Body>
                </Card>

                {/* </div> */}

              </div>
            </section>
          </div>

          <div className="footer">
            <section id="contact">
                <h2 className="title"> Contact Me </h2>

              <div className="contacts">
                <a href="mailto:ajli@wpi.edu" target="_blank" rel="noopener noreferrer" className="icon-container email">
                  <FaEnvelope size={40} />
                </a>
                <a href="https://www.linkedin.com/in/alex-jianqiao-li" target="_blank" rel="noopener noreferrer" className="icon-container linkedin">
                  <FaLinkedin size={40} />
                </a>
                <a href="https://github.com/alexli888" target="_blank" rel="noopener noreferrer" className="icon-container github">
                  <FaGithub size={40} />
                </a>
                <a href="https://drive.google.com/file/d/1_o-CztX0B52nUlfUIA1mELn4QuwzCmAw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="icon-container resume">
                  <FaFileAlt size={40} />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;