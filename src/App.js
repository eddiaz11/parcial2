
import './App.css';
import Table from "./Components/Table/Table";
import Card from "./Components/Card/Card";

import { React, useEffect, useState } from "react";

function App() {
  const [series, setSeries] = useState([]);
  const [serie, setSerie] = useState(false);
  
  return (
    <div className="container p-3">
    <h1>T.V. Series</h1>
    <hr/>
    <div className="row">
    <div className="col-sm-8"> 
    <Table series={series}></Table>
    </div>
    {
      serie && 
      <div className="col-sm">
        <Card serie={serie}></Card>
      </div>
    }
    
    
    
    </div>
    
    </div>
    );
  }
  
  export default App;
  