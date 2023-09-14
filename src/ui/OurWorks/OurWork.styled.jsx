import { styled } from "styled-components";
import { T_DOWN } from "../../utils/viewport";

export const Square = styled.div`
  width: 588px;
  height: 554px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0px 8px 35px 0px rgba(187, 169, 142, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media ${T_DOWN} {
    width: 308px;
    height: 454px;
  }
`;

export const SquareTitle = styled.div`
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.32px;
  padding-top: 45px;
  color: ${({ titleColor }) => titleColor || "black"};

  @media ${T_DOWN} {
    font-size: 25px;
  }
`;

export const SquareDescription = styled.div`
  width: 387px;
  color: #3d4f5c;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.16px;

  @media ${T_DOWN} {
    width: 200px;
    font-size: 12px;
    padding: 15px 0;
  }
`;

export const SquareButton = styled.button`
  color: var(--Complementary-Green, #46b8c8);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  width: 107px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 32.5px;
  border: 1px solid var(--Complementary-Green, #46b8c8);
  cursor: pointer;
  background: none;
  margin-bottom: 50px;

  @media ${T_DOWN} {
    width: 90px;
    height: 35px;
    font-size: 12px;
    margin: 20px 0;
  }
`;
