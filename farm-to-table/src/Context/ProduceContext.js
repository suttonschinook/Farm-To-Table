import React, { useState } from "react";
export const ProduceContext = React.createContext();
const axios = require("axios");

export default function ProduceProvider(props) {
  const [produceState, setProduceState] = useState({
    produceAvailable: [
      {
        item: "Apples",
        price: 3,
        description:
          "Who doesn't like fresh apples? If someone doesn't like apples they should not be trusted......",
        img: "http://www.pngall.com/wp-content/uploads/2016/04/Apple-Fruit.png",
      },
      // {
      //   item: "Apples",
      //   price: 3,
      //   description:
      //     "Who doesn't like fresh apples? If someone doesn't like apples they should not be trusted......",
      //   img: "http://www.pngall.com/wp-content/uploads/2016/04/Apple-Fruit.png",
      // },
      // {
      //   item: "Apples",
      //   price: 3,
      //   description:
      //     "Who doesn't like fresh apples? If someone doesn't like apples they should not be trusted......",
      //   img: "http://www.pngall.com/wp-content/uploads/2016/04/Apple-Fruit.png",
      // },
    ],
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
