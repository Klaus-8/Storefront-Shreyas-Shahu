import styled from "styled-components";

export const OuterContainer = styled.div`
  padding: 4.5rem 6rem;
  transition: all 0.2s ease;

  ${({ miniCart }) => miniCart && `background: rgba(57, 55, 72, 0.22);`};

  @media screen and (max-width: 480px) {
    padding: 2rem 0;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    padding: 3rem 2rem;
  }

  @media screen and (min-width: 1920px) {
    padding: 10rem 6rem;
  }
`;

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const SecondaryImageOuterContainer = styled.div`
  overflow-y: scroll;

  @media screen and (max-width: 480px) {
    margin: 1rem 0;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    width: 10rem;
  }
`;

export const SecondaryImageInnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 6.5rem;
  height: 6.5rem;

  @media screen and (max-width: 480px) {
    flex-direction: row;
  }
`;

export const SecondaryImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  object-fit: cover;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    margin: 0 1rem;
  }
`;

export const PrimaryImageContainer = styled.div`
  width: 42rem;
  height: 32rem;
  margin: 0 5rem 0 2rem;

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 16rem;

    margin: 0.5rem 0;
  }

  @media screen and (min-width: 1920px) {
    margin-left: 4rem;
  }
`;

export const PrimaryImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;

    margin: 2rem 0;
  }

  @media screen and (min-width: 1920px) {
    margin-left: 4rem;
  }
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 1.8rem;
`;

export const SubTitle = styled.span`
  font-weight: 400;
  font-size: 1.8rem;

  margin: 1rem 0;
`;

export const Price = styled.span`
  font-family: var(--font-roboto-condensed);
  font-weight: 700;
  font-size: 1.125rem;

  margin: 2.5rem 0 0.625rem 0;
`;

export const PriceValue = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
`;

export const AddCartContainer = styled.div`
  max-width: 18.25rem;
  padding: 1rem 2rem;
  margin: 1.25rem 0 2.5rem 0;
  border: 1px solid var(--green-color);
  background-color: var(--green-color);
  color: var(--white-color);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    background-color: var(--white-color);
    color: var(--green-color);
  }
`;

export const AddCart = styled.span``;

export const OutOfStockContainer = styled.div`
  max-width: 18.25rem;
  padding: 1rem 2rem;
  margin: 1.25rem 0 2.5rem 0;
  border: 1px solid var(--grey-color);
  background-color: var(--grey-color);
  color: var(--white-color);

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;
`;

export const OutOfStock = styled.span``;

export const Desc = styled.div`
  @media screen and (max-width: 480px) {
    margin: 0 1rem;
  }
`;

export const ShortDesc = styled.span`
  font-family: var(--font-roboto);
  font-weight: 400;
  font-size: 1rem;
`;

export const FullDesc = styled.span`
  font-family: var(--font-roboto);
  font-weight: 400;
  font-size: 1rem;
`;

export const ReadMore = styled.span`
  font-weight: 200;
  font-size: 0.9rem;
  color: blue;

  &:hover {
    cursor: pointer;
  }
`;
