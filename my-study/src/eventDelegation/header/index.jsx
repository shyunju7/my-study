import React from "react";
import styled from "styled-components";
const Header = () => {
  const handleClickMenu = (e) => {
    console.log(`handleClickMenu...`);
    e.preventDefault();
    if (e.target.classList.contains("menu-item")) {
      const id = e.target.getAttribute("href");
      console.log(`id: ${id}`);
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Menu onClick={handleClickMenu}>
        <MenuItem>
          <Link href="#home" className="menu-item">
            HOME
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="#profile" className="menu-item">
            PROFILE
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="#project" className="menu-item">
            PROJECT
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="#contact" className="menu-item">
            CONTACT
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Header;

const Menu = styled.ul`
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

const MenuItem = styled.li`
  margin: 0px 32px;
  list-style: none;
`;

const Link = styled.a`
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
