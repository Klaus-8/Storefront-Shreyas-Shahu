import styled from "styled-components";

export const CurrencyMenu = styled.div`
  position: absolute;
  top: 4rem;
  right: 8rem;

  width: 8rem;
  height: 12rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 480px) {
    top: 2.5rem;
    right: 2rem;

    width: 8rem;
    height: 12rem;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    right: 4rem;
  }
`;

export const CurrencyContainer = styled.div`
  flex: 1;

  width: 100%;
  height: 100%;
  z-index: 3;
  padding: 0.6rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--white-color);

  &:hover {
    cursor: pointer;
    background-color: #e5e5e5;
  }
`;

export const CurrencyItem = styled.span`
  font-weight: 500;
  font-size: 1.125rem;
  text-align: right;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
