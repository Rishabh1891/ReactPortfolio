import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishabh Tripathi </span>
            from <span className="purple"> Ambala, Haryana, India.</span>
            <br />I am a Front End Developer and Looking Forward For a suitable
            Platform To Showcase of My Talent.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Book Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Useful Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exercise & Yoga
            </li>
            <li className="about-activity">
              <ImPointRight /> स्वराज्य धर्म रक्षणार्थ ।
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "नभ: स्‍पृशं दीप्‍तम!, शं नो वरुणः, वंदे मातरम् |"{" "}
          </p>
          <footer className="blockquote-footer">Rishabh Tripathi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
