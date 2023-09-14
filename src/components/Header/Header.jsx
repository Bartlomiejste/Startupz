import React from 'react'
import { Button, HeaderContainer, HeaderImg, ImgPicture, Paragraph, Title, Typography } from '../../ui/Header/HeaderUi';
import HeaderPicture from '../../assets/Header/HeaderPicture.png';

const Header = () => {
  return (
    <HeaderContainer>

      <Typography>
        <Title>We Create Startups.</Title>
        <Paragraph>We are startup studio that develops and launches new companies.</Paragraph>
        <Button>See our works</Button>
      </Typography>
      
      <HeaderImg>
        <ImgPicture src={HeaderPicture} alt="Company logo" />
      </HeaderImg>

    </HeaderContainer>
  )
}

export default Header;