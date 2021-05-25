import { React } from "react";
const Card = ({serie}) => {
   
    return (
              
        <div className="card" >
        <img src={serie.poster} className="card-img-top" alt={serie.name}/>
        <div className="card-body">
          <h5 className="card-title">{serie.name}</h5>
          <p className="card-text">
          {serie.description}
          </p>
          <a href={serie.webpage} target="_blank"  className="btn btn-link">{serie.webpage}</a>
        </div>
      </div>
              
        );
    };
    export default Card;
    