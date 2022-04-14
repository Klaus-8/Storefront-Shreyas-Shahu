import styled, { css } from "styled-components";

export const AttributesContainer = styled.div``;

export const Attributes = styled.div`
  margin: 0.5rem 0;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0 1rem;
  }
`;

const typeMiniCartAttributeName = css`
  font-weight: 500;
  font-size: 15px;

  margin-top: 1rem;
`;

export const AttributeName = styled.span`
  font-family: var(--font-roboto-condensed);
  font-weight: 700;
  font-size: 18px;

  margin-top: 1.7rem;

  ${({ type }) => type === "miniCart" && typeMiniCartAttributeName}
`;

export const AttributeOuterContainer = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    margin: 0 1rem;
  }
`;

const typeMiniCartSwatch = css`
  width: 2rem;
  height: 1.4rem;
  margin: 0.25rem 0.375rem 0.25rem 0;
`;

const typeSingleProductSwatch = css`
  &:hover {
    cursor: pointer;
  }
`;

const activeSwatch = css`
  opacity: 0.2;
`;

export const AttributeSwatchContainer = styled.div`
  width: 3.9375rem;
  height: 2.8125rem;
  margin: 0.5rem 0.75rem 0.5rem 0;
  border: 1px solid lightGray;

  background-color: ${({ colorHex }) => colorHex};
  transition: all 0.3s ease;

  ${({ type }) => type === "miniCart" && typeMiniCartSwatch};

  ${({ type }) => type === "singleProduct" && typeSingleProductSwatch}

  ${({ active }) => active && activeSwatch}
`;

const typeMiniCartInnerContainer = css`
  margin: 0.25rem 0.375rem 0.25rem 0;
  padding: 0.4rem 0.7rem;
`;

const typeSingleProductInnerContainer = css`
  &:hover {
    cursor: pointer;
  }
`;

const activeInnerContainer = css`
  color: var(--white-color);
  background-color: var(--black-color);
`;

export const AttributeInnerContainer = styled.div`
  margin: 0.5rem 0.75rem 0.5rem 0;
  padding: 0.8rem 1.4rem;

  border: 1px solid var(--black-color);
  transition: all 0.3s ease;

  ${({ type }) => type === "miniCart" && typeMiniCartInnerContainer};

  ${({ type }) => type === "singleProduct" && typeSingleProductInnerContainer}

  ${({ active }) => active && activeInnerContainer}
`;

export const AttributeValue = styled.span``;
