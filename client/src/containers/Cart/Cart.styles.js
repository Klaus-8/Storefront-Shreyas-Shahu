import styled from "styled-components";

export const OuterContainer = styled.div`
  transition: all 0.2s ease;

  ${({ emptyCart }) =>
    emptyCart
      ? `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `
      : `
  padding: 5rem 15rem 0 6.25rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 5rem 5rem 0 6.25rem;
  }
  `}

  ${({ miniCart }) => miniCart && `background: rgba(57, 55, 72, 0.22);`};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.span`
  margin-bottom: 3.75rem;

  font-weight: 700;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Hr = styled.hr`
  border: none;
  height: 1px;
  margin: 1rem 0;
  background-color: #e5e5e5;
`;

export const CartItemContainer = styled.div``;

export const EmptyCartContainer = styled.div`
  width: 30rem;
  height: 30rem;

  ${({ miniCart }) => miniCart && `opacity: 0;`};

  @media screen and (max-width: 480px) {
    margin-top: 5rem;
    width: 20rem;
    height: 20rem;
  }
`;

export const EmptyCart = styled.img`
  width: 100%;
  height: 100%;
`;
