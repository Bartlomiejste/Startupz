import React from 'react'
import HiringLeft from '../../assets/Hiring/HiringLeft.png';
import HiringRight from '../../assets/Hiring/HiringRight.png';
import { HiringButton, HiringContainer, HiringImg, HiringInformation, HiringParagraph, HiringTitle, ImgContainer } from '../../ui/Hiring/HiringUi';


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