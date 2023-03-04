import styled from "styled-components";
import { Link } from "react-router-dom";

export const DisplayMode = styled.div`
  display: flex;
  top: 62px;

  @media screen and (max-width: 480px) {
    /* display: block; */
  }
`;

export const SidebarNav = styled.nav`
  background: white;
  width: 20%;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  transition: 350ms;
  z-index: 10;
  /* padding-top: 1%; */
  /* position: fixed; */
  /* top: 62px; */

  @media screen and (max-width: 480px) {
    width: 100%;
    position: fixed;
    z-index: 1000;
    display: ${({ sidebar }) => (sidebar ? "flex" : "block")};
    left: 0;
    top: 15vh;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const ContentBody = styled.div`
  /* height: 100%; */
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  position: relative;
  overflow-y: scroll;
  /* max-height: 85vh; */

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const Nav = styled.div`
  height: 40px;
  display: flex;
  /* display: hidden; */
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (max-width: "480px") {
    /* display: block; */
  }
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 20px;
  justify-content: flex-start;
  align-items: center;
  display: none;
  color: black;
  z-index: 10;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    display: flex;
  }
`;
