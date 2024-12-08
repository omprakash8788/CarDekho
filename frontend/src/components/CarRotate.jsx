import React from "react";
import "./CarRotate.css"; 
import carImage from "../assets/car1.webp"; 
import carImage1 from "../assets/car2.webp"; 


const CarRotate = () => {
    const images =[
        carImage,
        carImage1

    ]
  return (
    <div className="car-move-container">
      <img src={carImage} alt="Rotating Car" className="moving-car" />
    </div>
  );
};

export default CarRotate;
