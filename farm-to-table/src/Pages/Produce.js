import React from "react";
import Header from "../ReusableComponents/Header";
import BootstrapNav from "../ReusableComponents/BootstrapNav";
import Footer from "../ReusableComponents/Footer";
import BuyProduce from "../Content/BuyProduce";
import styled from "styled-components";

const StyledProduce = styled.div`
  display: flex;
  width: 50vw;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <div>
      <BootstrapNav />
      <Header />
      <BuyProduce />
      <Footer />
    </div>
  );
}
