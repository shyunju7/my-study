/* event Delegation을 사용한 nav 구현 */
import React from "react";
import styled from "styled-components";
import Contents from "./contents";
import Header from "./header";
const DelegationTest = () => {
  return (
    <Container>
      <Header />
      <Contents />
    </Container>
  );
};

export default DelegationTest;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
