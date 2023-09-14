import styled from "styled-components";
import {L_DOWN, SM_UP} from "../../utils/viewport";

export const MainContainer = styled.div`
  width:100%;
  height:100%;
  background-color: #000;
  
  `;

export const PageContainer = styled.div`
  margin: 0 auto;
  background: white;
  width: 1440px;
  height: 100%; //6301px;

  @media screen and ${SM_UP} and ${L_DOWN} {
    width: 100%;
  }
`;