import React from "react";
import { MainContainer, PageContainer } from "../../ui/Layout/LayoutUi";
  
const Layout = ({ children }) => {
  return (
    <MainContainer>
      <PageContainer>
        {children}
      </PageContainer>
    </MainContainer>
  );
};

export default Layout;
