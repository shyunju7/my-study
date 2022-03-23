import React from "react";
import DelegationTest from "./eventDelegation/index";
import styled from "styled-components";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
const App = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // document.querySelector("#home").scrollIntoView({
    //   behavior: "smooth",
    // });
  };
  return (
    <Container>
      <Button size="36px" color="#767676" onClick={handleScrollToTop} />
      <DelegationTest />
      <footer>@copyright 2022</footer>
    </Container>
  );
};

export default App;
const Container = styled.div`
  position: relative;
`;
const Button = styled(FaRegArrowAltCircleUp)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  outline: none;
`;
