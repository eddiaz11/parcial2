import { React } from "react";
const Card = ({image, name, resumen, link}) => {
   
    return (
              
        <div className="card" >
        <img src={image} className="card-img-top" alt={name}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
          {resumen}
          </p>
          <a href={link} target="_blank"  className="btn btn-link">{link}</a>
        </div>
      </div>
              
        );
    };
    export default Card;
    