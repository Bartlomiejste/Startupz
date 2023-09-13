import { T_DOWN } from '../../utils/viewport';
import { styled } from 'styled-components';

export const FormMessageContainer = styled.div`
    width: 1440px;
    height: 933px;
    flex-shrink: 0;
    background: var(--Secondary-Yellow, #FCBE5E);
    display: flex;
    padding-left: 120px;

    @media ${T_DOWN} {
        width: 100%;
        padding: 0 10px;
        flex-direction: column;
    }

`;

export const FormMessageText = styled.div`
    display:flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    @media ${T_DOWN} {
        align-items: center;
    }

`;


export const FormMessageTitle = styled.div`
    color: #FFF;
    font-family: Circular Std;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 55px;
    letter-spacing: -1.2px;
    width: 677px;

    @media ${T_DOWN} {
        padding-top: 45px;
        width: 100vw;
        text-align: center;
        font-size: 32px;
    }

`;

export const FormMessageParagraph = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.24px;
    padding: 34px 0;
 
    @media ${T_DOWN} {
        font-size: 16px;
        text-align: center;
    }

`;

export const FormMessageWrapper = styled.div`
    width: 512px;
    height: 601px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #F3F3F3;
    box-shadow: 0px 8px 35px 0px rgba(187, 169, 142, 0.15);

    @media ${T_DOWN} {
        height: 550px;
        width: 300px;
    }

`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

`;

export const Input = styled.input`
    width: 429px;
    height: 54px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 8px 35px 0px rgba(187, 169, 142, 0.15);
    border: none;
    color: #939393;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    padding: 18px 0 18px 16px;
    
    @media ${T_DOWN} {
        width: 280px;
        font-size: 12px;
    }

`;

export const TextArea = styled.textarea`
    width: 429px;
    height: 270px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 8px 35px 0px rgba(187, 169, 142, 0.15);
    border: none;
    color: #939393;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    padding: 18px 0 18px 16px;

    @media ${T_DOWN} {
        width: 280px;
        font-size: 12px;
    }

`;

export const Button = styled.button`
    width: 243px;
    height: 45px;
    flex-shrink: 0;
    border-radius: 32.5px;
    border: 1px solid #3D4F5C;
    background: #3D4F5C;
    color: #FBFBFA;
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;


    @media ${T_DOWN} {
        width: 150px;
        font-weight: 400;
        height: 25px;
        font-size: 12px;
    }

`;



export const ImgContainer = styled.div`
    display:flex;
    flex-shrink: 0;
    width: 1420px;
    height: 933px;
    align-items: flex-end;

`;

export const FormMessageImg = styled.img`
    width: 620px;
    height: 540px;
    margin-left: -115px;

  @media ${T_DOWN} {
    display: none;
}

`;