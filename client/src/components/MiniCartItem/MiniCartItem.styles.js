import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 2.5rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 300;
  font-size: 1rem;

  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.span`
  font-weight: 300;
  font-size: 1rem;
`;

export const PriceValue = styled.span`
  font-weight: 500;
  font-size: 1rem;

  margin: 0.3125rem 0 1.6875rem 0;

  @media screen and (max-width: 480px) {
    margin: 0.3125rem 0 1rem 0;
  }
`;

export const RightContainer = styled.div`
  display: flex;

  margin-left: 1.125rem;

  @media screen and (max-width: 480px) {
    margin-left: 0;
    flex-direction: row-reverse;
    justify-content: flex-end;

    margin: 2rem 0;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  margin-right: 0.625rem;

  @media screen and (max-width: 480px) {
    margin-right: 0;
    margin-left: 1rem;
  }
`;

export const Plus = styled.div`
  width: 1.8rem;
  height: 1.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--black-color);

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const Quantity = styled.span``;

export const Minus = styled.div`
  width: 1.8rem;
  height: 1.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--black-color);

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageContainer = styled.div`
  width: 6.5625rem;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
