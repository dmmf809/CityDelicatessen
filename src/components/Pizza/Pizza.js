import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import {
  ProductCard,
  ProductDesc,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductsContainer,
  ProductsHeading,
  ProductTitle,
  ProductWrapper,
} from './styles';

const Pizza = ({ data, heading }) => {
  const [isToggle, setToggle] = useState(false);

  const toggle = () => {
    setToggle(!isToggle);
  };
  console.log(isToggle);
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isToggle={isToggle} />
      <ProductsContainer id='pizza'>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
          {data.map((pizza, i) => {
            return (
              <ProductCard key={i}>
                <ProductImg src={pizza.img} alt={pizza.alt} />
                <ProductInfo>
                  <ProductTitle>{pizza.name}</ProductTitle>
                  <ProductDesc>{pizza.desc}</ProductDesc>
                  <ProductPrice>{pizza.price}</ProductPrice>
                </ProductInfo>
              </ProductCard>
            );
          })}
        </ProductWrapper>
      </ProductsContainer>
    </>
  );
};

export default Pizza;
