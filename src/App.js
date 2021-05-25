
import './App.css';
import Table from "./Components/Table/Table";
import Card from "./Components/Card/Card";

import { React, useEffect, useState } from "react";

function App() {
  const [series, setSeries] = useState([]);
  return (
    <div className="container p-3">
    <h1>T.V. Series</h1>
    <hr/>
    <div className="row">
    <Table series={series}>

    </Table>
    

    </div>

    </div>
  );
}

export default App;
