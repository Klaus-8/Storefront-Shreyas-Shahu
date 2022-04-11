import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 6.25rem;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const Left = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Button = styled.div`
  height: 100%;
  margin-right: 1.5rem;
  padding: 1.75rem 0.5rem;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }

  ${({ active, currentCategory }) =>
    active === currentCategory &&
    `
    color: var(--green-color);
    padding-bottom: 26px;
    border-bottom: 2px solid var(--green-color);

    @media screen and (max-width: 480px) {
      padding-bottom: 13px;
      border-bottom: 1px solid var(--green-color);
    }
  `}

  @media screen and (max-width: 480px) {
    margin-right: 0.3rem;
    padding: 0.875rem 0.25rem;
    font-size: 0.5rem;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    margin-right: 0.75rem;
  }
`;

export const Center = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BrandLogo = styled.img`
  @media screen and (max-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Right = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CurrencyButton = styled.div`
  display: flex;
  align-items: center;

  margin-left: 1.4rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    margin-left: 0.7rem;
  }
`;

export const Currency = styled.span`
  font-weight: 500;
  font-size: 1.125rem;

  @media screen and (max-width: 480px) {
    font-size: 0.5625rem;
  }
`;

export const CurrencyArrow = styled.img`
  margin-left: 0.625rem;

  @media screen and (max-width: 480px) {
    margin-left: 0.3125rem;
  }
`;

export const CartButtonContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 0.9rem;
    height: 0.9rem;
  }
`;

export const CartButton = styled.img`
  margin-left: 1.375rem;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
    margin-left: 0.8rem;
  }
`;

export const CartButtonBadgeContainer = styled.div`
  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -0.5rem;
  right: -0.8rem;

  border-radius: 50%;
  background: var(--black-color);

  @media screen and (max-width: 480px) {
    width: 0.625rem;
    height: 0.625rem;

    top: -0.25rem;
    right: -0.7rem;
  }
`;

export const CartButtonBadge = styled.span`
  color: var(--white-color);

  font-family: var(--font-roboto);
  font-weight: 700;
  font-size: 0.875rem;

  @media screen and (max-width: 480px) {
    font-size: 0.4375rem;
  }
`;
