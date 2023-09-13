import { styled } from 'styled-components';
import { T_DOWN } from '../../utils/viewport';

export const HiringContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 140px 0 165px 0;
  background: #FBFAFA;

  @media ${T_DOWN} {
    padding: 70px 0;
    justify-content: center;
    flex-direction: column;
  }

`;

export const HiringInformation = styled.div`
display: flex;
justify-content: space-around;
flex-direction: column;
align-items: center;

`;

export const HiringTitle = styled.div`
  color: #3D4F5C;
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 50px;
  letter-spacing: -1px;

  @media ${T_DOWN} {
    padding-top: 30px;
    font-size: 32px;
}

`;

export const HiringParagraph = styled.div`
  width: 443px;
  color: var(--Primary-Orange, #FB8958);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; 
  letter-spacing: -0.24px;
  padding-top: 30px;

  @media ${T_DOWN} {
    width: auto;
    font-size: 12px;
}

`;

export const HiringButton = styled.button`
  width: 243px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 32.5px;
  background: var(--Complementary-Green, #46B8C8);
  border: none;
  margin: 30px 0;
  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  cursor: pointer;

  @media ${T_DOWN} {
    width: 150px;
    font-weight: 400;
    height: 25px;
    font-size: 12px;
}

`;

export const ImgContainer = styled.div`

  @media ${T_DOWN} {
  display:flex;
  justify-content: center;
  align-items: center;
}

`;

export const HiringImg = styled.img`

  @media ${T_DOWN} {
  height: 200px;
}

`;