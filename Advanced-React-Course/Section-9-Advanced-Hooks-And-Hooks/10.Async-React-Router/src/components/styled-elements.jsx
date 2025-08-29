import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #333;
  padding: 10px;
  color: white;
  text-align: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoadingMessage = styled.div`
  color: #ffcc00;
  font-size: 16px;
  margin-top: 10px;
`;

export const MainContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

export const MainHeading = styled.h1`
  color: #aff003;
  font-size: 28px;
`;
