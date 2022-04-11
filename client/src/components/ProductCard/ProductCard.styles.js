import styled from "styled-components";

export const ButtonContainer = styled.div`
  opacity: 0;

  position: absolute;
  right: 0;
  bottom: 4.5rem;

  margin-right: 2rem;
  padding: 1rem;

  border-radius: 50%;
  background-color: var(--green-color);

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    bottom: 4rem;
    margin-right: 1.5rem;
    padding: 1.5rem;

    cursor: pointer;
  }
`;

export const Container = styled.div`
  flex: 1;

  position: relative;
  margin: 1rem 0;
  padding: 1rem;
  height: 28rem;
  min-width: 24rem;
  max-width: 24rem;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  &:hover ${ButtonContainer} {
    opacity: 1;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    min-width: 22.5rem;
    max-width: 22.5rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  background-color: "black";
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NoStockContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  width: 100%;
  height: 100%;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const NoStock = styled.span`
  font-weight: 400;
  font-size: 1.5rem;

  color: #8d8f9a;
`;

export const CartIcon = styled.img``;

export const InfoContainer = styled.div`
  margin: 1.5rem 0;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.1rem;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 1.1rem;
`;
