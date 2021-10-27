import Footer from '../Footer/Footer';
import {
  ProductCard,
  ProductDesc,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
} from '../Pizza/styles';
import { SandwichContainer, SandwichHeading } from './styles';

const Sandwich = ({ data, heading }) => {
  return (
    <>
      <SandwichContainer id='sandwiches'>
        <SandwichHeading>{heading}</SandwichHeading>
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
      </SandwichContainer>
      <Footer />
    </>
  );
};

export default Sandwich;
