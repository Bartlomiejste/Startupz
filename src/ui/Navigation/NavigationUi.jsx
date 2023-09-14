import { styled } from "styled-components";
import {T_DOWN} from "../../utils/viewport";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  width: 100%;
  padding: 0 20px;

  @media ${T_DOWN} {
   flex-direction: column;
  }

`;

export const LogoImg = styled.img`
`;

export const LogoContainer = styled.div`
  width: 199.486px;
  height: 47.848px;
  flex-shrink: 0;
  margin-left: 120px;

  @media ${T_DOWN} {
   margin-top: 50px;
   margin-left: 0px;
   }

`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-right:120px;

  @media ${T_DOWN} {
    margin-top: 50px;
    flex-direction: column;
    margin-right: 0px;
   }

`;

export const Button = styled.button`
  width: 185px;
  height: 45px;
  flex-shrink: 0;
  border: none;
  background: none;
  color: #3D4F5C;
  line-height: 18px;
  letter-spacing: -0.18px;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;

  &:hover {
  border-radius: 32.5px;
  border: 1px solid var(--Complementary-Green, #46B8C8);
  color: var(--Complementary-Green, #46B8C8);
  font-weight: 700;
  cursor: pointer;
  }
`;