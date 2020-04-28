import React from "react";
import Header from "../ReusableComponents/Header";
import BootstrapNav from "../ReusableComponents/BootstrapNav";
import Footer from "../ReusableComponents/Footer";
import RecipeMain from "../Content/RecipeMain";

export default function Home() {
  return (
    <div>
      <BootstrapNav />
      <Header />
      <RecipeMain />
      <Footer />
    </div>
  );
}



// import React from "react";
// import { Link } from "react-router-dom";
// import Header from "../ReusableComponents/Header";
// import BootstrapNav from "../ReusableComponents/BootstrapNav";
// import Footer from "../ReusableComponents/Footer";





// export default function Recipes(props) {
//   const {title, image, id } = props
//   return (
//     <div>
//       <BootstrapNav />
//       <Header />
//       <div className="meal">
//         <Link to = {`/${id}`}>
//           <img className="mealImg" src={image} alt="" />
//           <div className="meal-info">
//             <h1>{title}</h1>
//           </div>
//         </Link>
//       <Footer />
       
//       </div>
//     </div>
      
//   );

// }
