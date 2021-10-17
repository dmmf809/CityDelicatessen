import styled from 'styled-components';

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #ffff;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-family: 'Merriweather', serif;
  font-weight: 400;
  text-align: center;
  margin-bottom: 3rem;
  padding-top: 80px;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100px;
  box-shadow: 8px 8px #fdc500;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  font-family: 'Merriweather', sans-serif;
  font-weight: bold;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items; center;
    padding: 2rem;
    text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 0.5rem;
  font-family: 'Roboto', sans-serif;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
`;
