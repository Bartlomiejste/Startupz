import React from 'react'
import { Button, HeaderContainer, Img, ImgPicture, Paragraph, Title, Typography } from '../../ui/Header/HeaderUi';


const Header = () => {
  return (
    <HeaderContainer>

      <Typography>
        <Title>We Create Startups.</Title>
        <Paragraph>We are startup studio that develops and launches new companies.</Paragraph>
        <Button>See our works</Button>
      </Typography>
      
      <Img>
        <ImgPicture src="./global/img/Header/headerImg.png" alt="Company logo" />
      </Img>

    </HeaderContainer>
  )
}

export default Header;