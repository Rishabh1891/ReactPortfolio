import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Travel from "../../Assets/Projects/Travel.png";
import Dash from "../../Assets/Projects/Dash.png";
import Love from "../../Assets/Projects/Love page.png";
import Shoe from "../../Assets/Projects/Shoe.png";
import Quiz from "../../Assets/Projects/Quiz.png";
import Archi from "../../Assets/Projects/Archi.png";
import Weather from "../../Assets/Projects/Weather.png";
import chat from "../../Assets/Projects/chatapp.png";
import Expenses from "../../Assets/Projects/Expenses.png";
import Hoob from "../../Assets/Projects/Hoob.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Project <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few of the projects I've worked on Often.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Travel}
              isBlog={false}
              title="Travel"
              description="An Offical Webpage For those Personalities who love to Travel All Across the world and want to grab some exotic deals over Travel Packages."
              link="https://dazzling-villani-cd9871.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Archi}
              isBlog={false}
              title="Civil Engineer Services"
              description="Make It Easy and more convenient for individuals to make the reach to the best civil architects, engineers and designers to make their home look like heaven with some better toolkits."
              link="https://courageous-sable-9b2115.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Love}
              isBlog={false}
              title="Encrypted Love Message For Couple"
              description="Privacy stands as big concern in the life of a couple. So with this one, You can easily write your message with an Encryption of Passcode that can be only accessed by your targetted person."
              link="https://condescending-beaver-638fa0.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Shoe}
              isBlog={false}
              title="Digital Shoe Store"
              description="Take a Tour to a Digital Shoe store from your Chair and now it's been easy to decided to choose the right shape and size of your shoe pair using the UI Easily and purchase at affordable price."
              link="https://enchanting-medovik-7265b1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quiz}
              isBlog={false}
              title="द्रोण (Anti-Cheat Test)"
              description="By Undertaking the Modern cheating Problems in Online mode exams, i've been constructed this app which will prevent students to shift tab, Taking Class & Messages, closing the Window, Copy Pasting, Split Screen use Etc.
              (POWERED BY: EDUCATION DEPARTMENT HARYANA.GOV)"
              link="https://anticheat.pages.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dash}
              isBlog={false}
              title="Dashboard (React JS.)"
              description="Professionally Trained Dashboard For MNCs Proffesionals, CEOs, Doctors and Stock brokers made easy for themselves to monitor their sales, places sales, top customer Lists, Visits and also come up with music mode."
              link="https://rococo-dusk-ea899e.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather Report (React JS.)"
              description="A nice Weather Teller Android / IOS Application which has the ability to tell you weather of all across the world and all over the continents easily in one click."
              link="https://dreamy-liskov-3bae94.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat App (React JS.)"
              description="I got inspired by Facebook messenger and tried to make a clone of the messenger cortez. Usually applicable on all devices and helpful for single person chat with Encryption."
              link="https://pre-kalam.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Expenses}
              isBlog={false}
              title="Expenses Monitor. - (Web App.)"
              description="Now you can manage, track and keep the record of your monthly expenses, spendings and savings in one platform. Track down where your money is being invested and how much profit you are gaining with this easily."
              link="https://expense-meter.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hoob}
              isBlog={false}
              title="HooBank WebApp (Figma to React JS.)"
              description="A best practice on Application like this which is completely responsive on all kinds of viewports of devices
              I've take this idea from a figma post designer and that took me around four days to come up with the final productions."
              link="https://a6afb4e6.hoobank.pages.dev/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
