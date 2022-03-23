import React from "react";
import styled from "styled-components";
import Home from "../contents/Home.jsx";
import Profile from "../contents/Profile.jsx";
import Project from "../contents/Project.jsx";
import Contact from "../contents/Contact.jsx";
const Contents = () => (
  <Container>
    <Section id="home" bgColor="#d4ecff">
      <Home />
    </Section>
    <Section id="profile">
      <Profile />
    </Section>
    <Section id="project" bgColor="#d4ecff">
      <Project />
    </Section>
    <Section id="contact" bgColor="#133f63">
      <Contact />
    </Section>
  </Container>
);

export default Contents;
const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const Section = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
`;
