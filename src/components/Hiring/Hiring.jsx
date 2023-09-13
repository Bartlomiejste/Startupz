import React from 'react'
import HiringLeft from '../../assets/Hiring/HiringLeft.png';
import HiringRight from '../../assets/Hiring/HiringRight.png';
import { styled } from 'styled-components';

export const HiringContainer = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 140px 0 165px 0;
  background: #FBFAFA;

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

`;

export const ImgContainer = styled.div`

`;

export const HiringImg = styled.img`
`;


const Hiring = () => {
  return (

<HiringContainer>

  <ImgContainer><HiringImg src={HiringLeft} alt="HiringPicture" /></ImgContainer>

    <HiringInformation>
        <HiringTitle>We are hiring!</HiringTitle>
        <HiringParagraph>We're always looking for talented people to join and help build our startups. Check out our current openings</HiringParagraph>
        <HiringButton>See current openings</HiringButton>
    </HiringInformation>

    <ImgContainer><HiringImg src={HiringRight} alt="HiringPicture" /></ImgContainer>
</HiringContainer>
  )
}

export default Hiring