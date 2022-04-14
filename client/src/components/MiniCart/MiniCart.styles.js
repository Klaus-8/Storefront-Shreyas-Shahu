import styled, { css } from "styled-components";

export const MiniCartOuterContainer = styled.div`
  width: 25rem;
  height: 34rem;
  padding: 1rem;

  position: absolute;
  top: 4rem;
  right: 4rem;
  z-index: 3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--white-color);

  @media screen and (max-width: 480px) {
    width: 20rem;
    height: 30rem;
    padding: 1rem;

    top: 2.2rem;
    right: 1rem;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 1rem;

    top: 3.5rem;
    right: 1rem;
  }
`;

export const MiniCartInnerContainer = styled.div`
  overflow: scroll;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.span`
  margin-bottom: 1.5rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1.5rem 0;
`;

export const Total = styled.span`
  font-weight: 500;
  font-size: 1rem;
`;

export const TotalPrice = styled.span`
  font-weight: 700;
  font-size: 1rem;
`;

export const MiniCartButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const typeView = css`
  border: 1px solid var(--black-color);
  background: var(--white-color);
`;

const typeNotView = css`
  color: var(--white-color);
  background: var(--green-color);
`;

const typeCheck = css`
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.2);
`;

const typeNotCheck = css`
  color: var(--white-color);
  background: var(--green-color);
  border: 1px solid var(--green-color);
`;

export const MiniCartButton = styled.div`
  padding: 1rem 3rem;

  ${({ type }) => (type === "view" ? typeView : typeNotView)};

  font-weight: 600;
  font-size: 0.875rem;

  transition: all 0.3s ease;

  &:hover {
    ${({ type }) => (type === "check" ? typeCheck : typeNotCheck)};

    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    padding: 1rem 2rem;
  }
`;

export const EmptyCartContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EmptyCart = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
`;
