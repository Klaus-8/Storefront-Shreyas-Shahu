import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1.25rem 0;

  @media screen and (max-width: 480px) {
    margin: 0.625rem 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 600;
  font-size: 1.875rem;

  margin-bottom: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
  }
`;

export const SubTitle = styled.span`
  font-weight: 400;
  font-size: 1.875rem;

  @media screen and (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export const PriceValue = styled.span`
  font-weight: 700;
  font-size: 1.5rem;

  margin: 0.75rem 0;

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;

    margin: 0.3rem 0;
  }
`;

export const RightContainer = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 0.75rem;

  @media screen and (max-width: 480px) {
    margin-right: 0;
    flex-direction: row;
    margin-top: 0.5rem;
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

export const Quantity = styled.span`
  margin: 2rem 0;
`;

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
  width: 14rem;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Arrow = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 1rem;
  border-radius: 50%;
  background-color: lightGray;
  opacity: 0.5;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  position: absolute;
  ${({ direction }) => direction}: 0;
  z-index: 1;
`;
