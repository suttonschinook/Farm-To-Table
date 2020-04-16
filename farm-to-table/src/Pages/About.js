import React from "react";
import Header from "../ReusableComponents/Header";
import BootstrapNav from "../ReusableComponents/BootstrapNav";
import Info from "../Content/Info";
import Footer from "../ReusableComponents/Footer";

export default function About() {
  return (
    <div>
      <BootstrapNav />
      <Header />
      <Info />
      <Footer />
    </div>
  );
}
