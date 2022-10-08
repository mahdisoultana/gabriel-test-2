import React from "react";

import styled from "@emotion/styled";
import VerticleLine from "../styled/VerticleLine";
import AsideLeft from "./asides/asideLeft/AsideLeft";
import AsideRight from "./asides/asideRight/AsideRight";
import Console from "./console/Console";
import Nav from "./nav/Nav";
const Container = styled.section`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: 50px 1fr;
  min-height: 100vh;
`;
function Layout({ children }) {
  return (
    <Container className="bg-blue-dark text-blue-xlight overflow-hidden">
      <Nav />
      <AsideLeft />
      <main className="relative bg-blue-medium   ">
        <VerticleLine />
        <VerticleLine className="right-0 bg-blue-dark" />

        {children}
        <Console />
      </main>
      <AsideRight />
    </Container>
  );
}

export default Layout;
