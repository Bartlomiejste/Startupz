import { styled } from "styled-components";
import { T_DOWN } from "../../utils/viewport";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 714px;
  flex-shrink: 0;
  background: #fbfafa;
  padding-left: 120px;

  @media ${T_DOWN} {
    height: auto;
    padding-left: 0px;
  }
`;

export const AboutInformation = styled.div`
  display: flex;
  width: 100%;

  @media ${T_DOWN} {
    padding: 25px 10px 0 10px;
    align-items: center;
  }
`;

export const AboutText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media ${T_DOWN} {
    margin-bottom: 50px;
  }
`;

export const AboutTitle = styled.div`
  color: #3d4f5c;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -1px;
  width: 100%;

  @media ${T_DOWN} {
    text-align: center;
    font-size: 32px;
  }
`;

export const AboutParagraph = styled.p`
  color: var(--Primary-Orange, #fb8958);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.24px;
  width: 100%;
  margin: 0;

  @media ${T_DOWN} {
    letter-spacing: -0.8px;
    padding: 0 10px;
    font-size: 11px;
    width: 100%;
    text-align: center;
  }
`;

export const AboutPicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
`;

export const AboutImg = styled.img`
  width: 75px;
  height: 88px;
  flex-shrink: 0;
`;
export const ImgPicture = styled.img`
  width: 75px;
  height: 88px;
  flex-shrink: 0;
`;

export const AboutSteps = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media ${T_DOWN} {
    flex-direction: column;
    padding: 0 10px;
  }
`;
