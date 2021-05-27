import { React } from "react";
import Row from "./Row";
const Table = ({series, handleSerie}) => {
    
   
    
    return (
        <div>
        <table className="table table-striped">
        <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Channel</th>
        <th scope="col">Seasons</th>
        <th scope="col">Episodes</th>
        <th scope="col">Release Date</th>
        </tr>
        </thead>
        <tbody>
        { series && series.map((elem) => (
            <Row key={elem.id} serie={elem} handleSerie={handleSerie}></Row>
            ))
            
        }
        </tbody>
        </table>
        
        
        </div>
        
        );
    };
    export default Table;
    