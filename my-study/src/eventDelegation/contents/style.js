import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
`;

export const Title = styled.h2`
  text-align: center;
  color: ${(props) => (props.color ? props.color : "#333")};
`;
