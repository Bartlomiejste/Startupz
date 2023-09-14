import { styled } from "styled-components";
import { T_DOWN } from "../../utils/viewport";

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fbfafa;
`;

export const ValuesTitle = styled.div`
  color: #3d4f5c;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -1px;

  @media ${T_DOWN} {
    text-align: center;
    font-size: 32px;
  }
`;

export const ValuesText = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 172px 0px 0px 120px;
  align-items: center;

  @media ${T_DOWN} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px 10px 0 10px;
  }
`;

export const ValuesImg = styled.div`
  padding-right: 153px;

  @media ${T_DOWN} {
    padding-right: 0px;
  }
`;

export const ImgBulb = styled.img`
  width: 90px;
  height: 108px;
  flex-shrink: 0;
`;

export const ValuesSteps = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding-bottom: 196px;

  @media ${T_DOWN} {
    padding: 0 10px 70px 10px;
    flex-direction: column;
  }
`;
