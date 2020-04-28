import React, { useContext, useEffect } from "react";
import { ProduceContext } from "../Context/ProduceContext";
import DisplayProduce from "../ReusableComponents/DisplayProduce";

export default function BuyProduce() {
  const { getProduce } = useContext(ProduceContext);

  useEffect(() => {
    getProduce();
  }, []);
  return (
    <>
      <DisplayProduce />
    </>
  );
}
