import React from "react";
import Header from "../ReusableComponents/Header";
import BootstrapNav from "../ReusableComponents/BootstrapNav";
import Footer from "../ReusableComponents/Footer";
import BuyProduce from "../Content/BuyProduce";

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
