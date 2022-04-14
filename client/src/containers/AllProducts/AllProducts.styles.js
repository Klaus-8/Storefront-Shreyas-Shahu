import styled from "styled-components";

export const OuterContainer = styled.div`
  padding: 5rem 6.25rem;
  transition: all 0.2s ease;

  @media screen and (max-width: 480px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Heading = styled.h2`
  font-weight: 400;
  font-size: 42px;

  @media screen and (max-width: 480px) {
    font-size: 21px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 35px;
    margin-left: 1rem;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  margin: 6.5rem 0;

  @media screen and (max-width: 480px) {
    justify-content: center;
    flex-wrap: none;

    margin: 0;
  }

  @media screen and (min-width: 481px) and (max-width: 1024px) {
    justify-content: space-between;
    margin: 3rem 0;
  }
`;
