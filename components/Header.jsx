import Nav from "./Nav";
import styled from "styled-components";
import { white, darkGreen, black } from "../colors";
import { medium } from "../breakpoints";
import Link from "next/link";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  background-color: ${darkGreen};
  padding-bottom: 0;
  @media (min-width: ${medium}) {
    padding-top: 24px;
  }
`;

const Logo = styled.a`
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  color: ${white};
  font-family: "Montserrat";
  line-height: 1;
  margin-bottom: 8px;
  @media (min-width: ${medium}) {
    font-size: 48px;
    margin-bottom: 32px;
  }
`;

const Header = () => (
  <StyledHeader>
    <Link href="/">
      <Logo>Renqvists verkstad</Logo>
    </Link>
    <Nav />
  </StyledHeader>
);

export default Header;
