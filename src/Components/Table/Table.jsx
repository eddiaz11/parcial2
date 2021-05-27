import { React } from "react";
import { FormattedMessage } from "react-intl";
import Row from "./Row";
const Table = ({series, handleSerie}) => {
    
   
    
    return (
        <div>
        <table className="table table-striped">
        <thead>
        <tr>
        <th scope="col">
      #
        </th>
        <th scope="col">
        <FormattedMessage id="Name"/>
        </th>
        <th scope="col">
        <FormattedMessage id="Channel"/>
        </th>
        <th scope="col">
        <FormattedMessage id="Season"/>
        </th>
        <th scope="col">
        <FormattedMessage id="Episodes"/>
        </th>
        <th scope="col">
        <FormattedMessage id="Release Date"/>
        </th>
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
    