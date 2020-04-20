import React from "react";
import { Link } from "react-router-dom";



export default function Recipes(props) {
  const {title, image, id } = props
  return (
    <div>
       <div className="meal">
        <Link to = {`/${id}`}>
          <img className="mealImg" src={image} alt="" />
          <div className="meal-info">
            <h1>{title}</h1>
          </div>
        </Link>
      </div>
    </div>
  );

}
