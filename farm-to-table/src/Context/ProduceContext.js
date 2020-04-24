import React, { useState } from "react";
export const ProduceContext = React.createContext();
const axios = require("axios");

export default function ProduceProvider(props) {
  const [produceState, setProduceState] = useState({
    produceAvailable: [],
  });
  function getProduce() {
    axios.get("/produce").then((response) => {
      console.log(response);
      setProduceState((prev) => ({ ...prev, produceAvailable: response.data }));
    });
  }

  return (
    <ProduceContext.Provider value={{ ...produceState, getProduce }}>
      {props.children}
    </ProduceContext.Provider>
  );
}
