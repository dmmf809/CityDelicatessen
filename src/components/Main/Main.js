import {
  MainContainer,
  MainWrapper,
  MainHeader,
  MainP,
  MainButton,
  MainItems,
} from './styles';

const Main = () => {
  return (
    <>
      <MainContainer>
        <MainWrapper>
          <MainItems>
            <MainHeader>Fresh &amp; delicious pizza</MainHeader>
            <MainP>Ready in a slice!</MainP>
            <MainButton to='/menu'>Order Now</MainButton>
          </MainItems>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default Main;
