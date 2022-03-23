import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 54px;
  padding: 0px;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  right: 50%;
  transform: translateX(50%);
`;

export const MenuItem = styled.li`
  margin: 0px 32px;
  list-style: none;
`;

export const Link = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 12px;
  border-radius: 20px;

  &:hover {
    background-color: #438ecc;
    color: #fff;
  }
`;
