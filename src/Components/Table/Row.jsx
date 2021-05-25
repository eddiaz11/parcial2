import { React } from "react";
const Row = ({serieID, name, channel, seasons, episodes, release}) => {
    return (
               <tr>
                   <th scope="row">
                        {serieID}
                   </th>
                   <td>
                        {name}
                   </td>
                   <td>
                        {channel}
                   </td>
                   <td>
                        {seasons}
                   </td>
                   <td>
                        {episodes}
                   </td>
                   <td>
                        {release}
                   </td>
               </tr>
        );
    };
    export default Row;
    