import { styled } from "styled-components";
import { T_DOWN, SL_DOWN, T_UP, L_UP, L_DOWN, lUp, SL_UP, lDown } from "../../utils/viewport";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 91px 136px 123px 121px;
  background: #fff;

  @media ${T_DOWN} {
    text-align: center;
    flex-direction: column;
  }
`;

export const FooterCopyRight = styled.div``;

export const FooterCopyRightParagraph = styled.div`
  color: #939393;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;

  @media ${T_DOWN} {
    text-align: center;
    font-size: 12px;
    margin-bottom: 50px;
  }
`;

export const FooterCopyRightImg = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterContainerImg = styled.img`
  display: flex;
  width: 178px;
  height: 130px;
  padding-bottom: 84.56px;
  cursor: pointer;
  transition: transform 0.6s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.div`
  color: #3d4f5c;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  padding-bottom: 19px;
  width: 78px;

  @media ${T_DOWN} {
    width: 100%;

    font-size: 16px;
  }
`;

export const FooterContactParagraph = styled.p`
  color: #939393;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  padding-bottom: 12px;
  width: 270px;

  @media ${T_DOWN} {
    font-size: 12px;
  }

  @media ${L_DOWN} {
    font-size: 12px;
  }

`;

export const FooterContact = styled.div`
  color: var(--Complementary-Green, #46b8c8);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  cursor: pointer;

  @media ${T_DOWN} {
    font-size: 16px;
  }
`;

export const FooterSocialMedia = styled.div`
  cursor: pointer;
  transition: transform 0.6s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const FooterCompaniesTitle = styled.div`
  color: var(--Complementary-Green, #46b8c8);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  width: 124px;
  cursor: pointer;

  @media ${T_DOWN} {
    font-size: 16px;
  }
`;

export const FooterInformation = styled.div`
`;

export const FooterWrapper = styled.div`
  display: flex;
  padding: 0 0 0 220px;
  gap: 150px;

  @media ${T_DOWN} {
    gap: 30px;
    padding: 10px;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 1024px) and (max-width: 1024px) {
    padding: 0 0 0 100px;
    gap: 50px;
  }

`;

export const FooterImg = styled.img`
  padding: 5px 0;
`;
