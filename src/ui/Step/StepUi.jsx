import styled from 'styled-components';
import {L_UP, SL_DOWN, T_DOWN} from "../../utils/viewport";

export const StepContainer = styled.div`
    margin-top: 79px;
    display: flex;
    flex-direction: column;

`;

export const StepTitle = styled.div`
    color: var(--Primary-Orange, #FB8958);
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; 
    letter-spacing: -0.3px;

    @media ${T_DOWN} {
        font-size: 23px;
        margin-top: -50px;
    }

`;

export const StepParagraph = styled.div`
    color: #3D4F5C;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: -0.3px;
    margin-top: 26px;
    padding-right: ${({ customPadding }) => customPadding || '0px'};
    width: ${({ customWidth }) => customWidth || '100%'};
    white-space: pre-line;

    @media ${T_DOWN} {
        font-size: 12px;
        white-space: normal;
        margin: 0px;
    }

    @media ${SL_DOWN} {
        padding-right: 10px;
        font-size: 16px;
        width: 500px;
    }

    @media ${L_UP} {
        font-size: 30px;
        width: 641px;
    }

`;

export const SvgIcon = styled.div`
    padding-top: 10px;
    
`;

