import { React } from "react";
const Row = ({serie, handleSerie}) => {
    return (
               <tr onClick={()=>{handleSerie(serie)}}>
                   <th scope="row">
                        {serie.id}
                   </th>
                   <td>
                        {serie.name}
                   </td>
                   <td>
                        {serie.channel}
                   </td>
                   <td>
                        {serie.seasons}
                   </td>
                   <td>
                        {serie.episodes}
                   </td>
                   <td>
                        {serie.release}
                   </td>
               </tr>
        );
    };
    export default Row;
    