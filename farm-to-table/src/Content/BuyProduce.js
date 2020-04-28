import React, { useContext, useEffect } from "react";
import { InfoContext } from "../Context/InfoContext";
import DisplayProduce from "../ReusableComponents/DisplayProduce";

export default function BuyProduce() {
  const { getProduce } = useContext(InfoContext);

  useEffect(() => {
    getProduce();
  }, []);
  return (
    <>
      <DisplayProduce />
    </>
  );
}
