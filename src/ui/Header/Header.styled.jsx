import { styled } from "styled-components";
import { T_DOWN } from "../../utils/viewport";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 700px;
  padding-left: 120px;

  @media ${T_DOWN} {
    height: auto;
    flex-direction: column;
    justify-content: center;
    margin-top: 150px;
    padding: 0 10px;
  }
`;

export const HeaderImg = styled.div`
  display: flex;
  align-self: flex-end;

  @media ${T_DOWN} {
    align-self: center;
  }
`;

export const ImgPicture = styled.img`
  @media ${T_DOWN} {
    margin-top: 25px;
    height: 200px;
  }
`;

export const Typography = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${T_DOWN} {
    text-align: center;
    align-items: center;
  }
`;

export const Title = styled.div`
  color: #3d4f5c;
  font-size: 85px;
  font-style: normal;
  font-weight: 700;
  line-height: 85px;
  letter-spacing: -1.7px;
  margin-bottom: 25px;

  @media ${T_DOWN} {
    font-size: 32px;
  }
`;

export const Paragraph = styled.div`
  color: var(--Primary-Orange, #fb8958);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.24px;
  margin-bottom: 25px;
  width: 130%;

  @media ${T_DOWN} {
    letter-spacing: -0.8px;
    font-size: 12px;
    width: 90%;
  }
`;

export const Button = styled.button`
  width: 157px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 32.5px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.18px;
  background: #46b8c8;
  cursor: pointer;

  @media ${T_DOWN} {
    width: 150px;
    height: 25px;
    font-size: 12px;
  }
`;
