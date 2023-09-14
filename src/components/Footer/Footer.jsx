import React from 'react'
import Logo from '../../assets/Footer/Logo.png';
import Twitter from '../../assets/Footer/Twitter.png';
import Linkedin from '../../assets/Footer/Linkedin.png';
import Instagram from '../../assets/Footer/Instagram.png';
import { FooterCompaniesTitle, FooterContact, FooterContactParagraph, FooterContainer, FooterContainerImg, FooterCopyRight, FooterCopyRightImg, FooterCopyRightParagraph, FooterImg, FooterInformation, FooterSocialMedia, FooterWrapper, Title } from '../../ui/Footer/Footer';

const Footer = () => {

    const handleFooterImgClick = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      };

  return (
    <FooterContainer>
        <FooterCopyRight>
            
            <FooterCopyRightImg>
                <FooterContainerImg onClick={handleFooterImgClick} src={Logo} alt="Logo" />
                <FooterCopyRightParagraph>© 2020 Startupz.<br/>All rights reserved.</FooterCopyRightParagraph>
            </FooterCopyRightImg>

        </FooterCopyRight>

        <FooterWrapper>

        <FooterInformation>
            <Title>Companies</Title>
            <FooterCompaniesTitle>Tolq</FooterCompaniesTitle>
            <FooterCompaniesTitle>LegalSite</FooterCompaniesTitle>
            <FooterCompaniesTitle>Codekeeper</FooterCompaniesTitle>
            <FooterCompaniesTitle>Feedback Labs</FooterCompaniesTitle>
        </FooterInformation>

        <FooterInformation>
            <Title>Contact</Title>
            <FooterContactParagraph>World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM The Hague The Netherlands</FooterContactParagraph>
            <FooterContact>Send us an email</FooterContact>
        </FooterInformation>

        <FooterInformation>
            <Title>Follow us</Title>
            <FooterSocialMedia><FooterImg src={Twitter} alt="TwitterLogo" /></FooterSocialMedia>
            <FooterSocialMedia><FooterImg src={Linkedin} alt="LinkedinLogo" /></FooterSocialMedia>
            <FooterSocialMedia><FooterImg src={Instagram} alt="InstagramLogo" /></FooterSocialMedia>
        </FooterInformation>

        </FooterWrapper>

    </FooterContainer>
  )
}

export default Footer