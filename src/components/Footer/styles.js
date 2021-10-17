import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #3d3939;
  display: flex;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: darkgrey;
  padding: 20px;
  line-height: 2;
`;

export const FooterLink = styled.a`
  color: #5b6ea3;

  &:hover {
    color: #5976c9;
  }
`;

export const FooterP = styled.p`
  font-size: 10px;
`;
