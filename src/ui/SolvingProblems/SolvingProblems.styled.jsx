import { styled } from "styled-components";
import { SL_DOWN, T_DOWN } from "../../utils/viewport";

export const SolvingProblemsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 70px 0;
`;

export const SolvingMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 142px;

  @media ${T_DOWN} {
    display: none;
  }
`;

export const Exit = styled.div`
  color: #939393;
  font-family: Roboto;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  margin-left: 87px;
`;

export const SolvingText = styled.div`
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  display: flex;

  @media ${T_DOWN} {
    flex-direction: column;
    justify-content: center;
  }
  @media ${SL_DOWN} {
    padding-left: 110px;
  }
`;

export const Thumb = styled.div`
  line-height: 50px;
`;

export const Paragraph = styled.p`
  color: var(--Primary-Orange, #fb8958);
  text-align: center;
  font-family: Circular Std;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -0.4px;
  padding: 0 50px;

  @media ${T_DOWN} {
    font-size: 32px;
  }
`;

export const Support = styled.div`
  line-height: 50px;
  padding: 0 121px 0 150px;
  position: relative;
`;

export const SvgImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: red;
`;

export const SvgContainer = styled.div`
  position: relative;

  @media ${T_DOWN} {
    display: none;
  }
`;

export const CenteredImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  height: 50px;
`;
