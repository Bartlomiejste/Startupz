import { styled } from "styled-components";
import { T_DOWN } from "../../utils/viewport";

export const OurWorksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const OurWorksTitle = styled.div`
  color: #3d4f5c;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -0.5px;
  dipslay: flex;
  padding-top: 140px;

  @media ${T_DOWN} {
    padding: 25px 10px;
    font-size: 32px;
  }
`;

export const OurWorksSquare = styled.div`
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 55px;
`;

export const OurWorksText = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 180px 120px;

  @media ${T_DOWN} {
    flex-direction: column;
    justify-content: center;
    margin: 0px;
    padding: 70px 120px;
  }
`;

export const Thumb = styled.div`
  line-height: 50px;
`;

export const OurWorkImg = styled.img`
  padding-bottom: 50px;

  @media ${T_DOWN} {
    padding-bottom: 10px;
    width: 300px;
  }
`;

export const Paragraph = styled.p`
  color: var(--Primary-Orange, #fb8958);
  text-align: center;
  font-family: Circular Std;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px;
  letter-spacing: -0.4px;
  width: 882px;
  margin: 40px;

  @media ${T_DOWN} {
    padding: 0 10px;
    width: 100vw;
    font-size: 20px;
    margin: 10px;
  }
`;
