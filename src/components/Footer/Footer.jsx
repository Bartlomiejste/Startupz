import React from 'react'
import { styled } from 'styled-components'
import Logo from '../../assets/Footer/Logo.png';

const FooterContainer = styled.div`
    padding: 91px 136px 123px 121px;
    background: pink;
`;

const FooterCopyRight = styled.div`
`;

const FooterCopyRightParagraph = styled.div`
color: #939393;
font-family: Circular Std;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 30px;
`;

const FooterCompanies = styled.div`
`;
const FooterContact = styled.div`
`;
const FooterFollowUs = styled.div`
`;
const ImgContainer = styled.div`
`;
const FooterContainerImg = styled.img`
`;
const Title = styled.div`
`;
const ContactParagraph = styled.p`
`;
const ContactSend = styled.p`
`;
const FollowMedia = styled.div`
`;
const CompaniesTitle = styled.div`
`;




const Footer = () => {
  return (
    <FooterContainer>
        <FooterCopyRight>
            <ImgContainer>
                <FooterContainerImg src={Logo} alt="Logo" />
                <FooterCopyRightParagraph>© 2020 Startupz. All rights reserved.</FooterCopyRightParagraph>
            </ImgContainer>
        </FooterCopyRight>
        <FooterCompanies>
            <Title>Companies</Title>
            <CompaniesTitle>Tolq</CompaniesTitle>
            <CompaniesTitle>LegalSite</CompaniesTitle>
            <CompaniesTitle>Codekeeper</CompaniesTitle>
            <CompaniesTitle>Feedback Labs</CompaniesTitle>
        </FooterCompanies>
        <FooterContact>
            <Title>Contact</Title>
            <ContactParagraph>World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM The Hague The Netherlands</ContactParagraph>
            <ContactSend>Send us an email</ContactSend>
        </FooterContact>
        <FooterFollowUs>
            <Title>Follow us</Title>
            <FollowMedia>T</FollowMedia>
            <FollowMedia>L</FollowMedia>
            <FollowMedia>I</FollowMedia>
        </FooterFollowUs>
    </FooterContainer>
  )
}

export default Footer