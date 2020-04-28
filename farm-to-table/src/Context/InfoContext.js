import React, { useState } from "react";
export const InfoContext = React.createContext();
const axios = require("axios");

export default function InfoProvider(props) {
  const [infoState, setInfoState] = useState({
    produceAvailable: [],
    availableRecipes: [],
  });
  function getProduce() {
    axios.get("/produce").then((response) => {
      console.log(response);
      setInfoState((prev) => ({ ...prev, produceAvailable: response.data }));
    });
  }

  function getRecipes() {
    axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then((response) => {
      console.log(response);
      setInfoState((prev) => ({ ...prev, availableRecipes: response.data }));
    });
  }

  return (
    <InfoContext.Provider value={{ ...infoState, getProduce, getRecipes }}>
      {props.children}
    </InfoContext.Provider>
  );
}
