import styled from 'styled-components';

export const SandwichContainer = styled.div`
  min-height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  background: #33261d;
  color: #ffff;

  @media screen and (max-width: 745px) {
    padding-top: 85px;
  }
`;

export const SandwichHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-family: 'Merriweather', serif;
  font-weight: 400;
  text-align: center;
  margin-bottom: 3rem;
`;
