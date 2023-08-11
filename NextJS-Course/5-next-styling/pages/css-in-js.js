import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${(theme) => theme.colors.primary};
`;

function CSSJS() {
  return <Title>Styled Component</Title>;
}

export default CSSJS;
